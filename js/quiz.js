document.addEventListener("DOMContentLoaded", () => {
    let quizData = [];
    const urlParams = new URLSearchParams(window.location.search);
    let year = urlParams.get('year');
    let type = urlParams.get('type');
    
    // Prioritaskan parameter type dari URL untuk menentukan tahun
    if (type === 'asas-genap') {
        year = '2026';
    } else if (type === 'asts-genap') {
        year = '2025';
    } else if (type === 'asas-ganjil' || type === 'asts-ganjil') {
        year = '2024';
    }

    // Fallback berdasarkan parameter "type" di localStorage jika URL hilang akibat clean-url redirect
    if (!year) {
        let savedType = localStorage.getItem('quizType');
        if (savedType === 'asas-genap') {
            year = '2026';
        } else if (savedType === 'asts-genap') {
            year = '2025';
        } else if (savedType === 'asas-ganjil' || savedType === 'asts-ganjil') {
            year = '2024';
        }
    }

    // Fallback terakhir: Jika quizType tidak ada, coba ambil quizYear
    if (!year) {
        year = localStorage.getItem('quizYear');
    }

    if (year === '2026' && typeof quizData2026 !== 'undefined') {
        quizData = quizData2026;
    } else if (year === '2025' && typeof quizData2025 !== 'undefined') {
        quizData = quizData2025;
    } else if (typeof quizData2024 !== 'undefined') { // Default to 2024
        quizData = quizData2024;
    }

    // Pastikan quizData tersedia
    if (typeof quizData === "undefined" || quizData.length === 0) return;

    let currentIndex = 0;
    
    // Menyimpan jawaban. Untuk PG = index opsi, Uraian = string, PGA = array
    const userAnswers = quizData.map(q => q.tipe === 'pga' ? [] : null);

    const dom = {
        questionNumberCounter: document.getElementById("q-number-counter"),
        progressPercent: document.getElementById("progress-percent"),
        progressBar: document.getElementById("progress-bar"),
        materiLabel: document.getElementById("q-materi-label"),
        questionText: document.getElementById("q-text"),
        imageContainer: document.getElementById("q-image-container"),
        imageEl: document.getElementById("q-image"),
        quoteEl: document.getElementById("q-quote"),
        optionsGrid: document.getElementById("q-options-grid"),
        essayContainer: document.getElementById("q-essay-container"),
        essayInput: document.getElementById("q-essay-input"),
        btnPrev: document.getElementById("btn-prev"),
        btnNext: document.getElementById("btn-next"),
        tipContainer: document.getElementById("q-tip-container"),
        tipText: document.getElementById("q-tip-text"),
        navGrid: document.getElementById("nav-grid")
    };

    function renderQuestion(index) {
        const q = quizData[index];
        const num = index + 1;
        const total = quizData.length;

        // Render Header
        dom.questionNumberCounter.innerHTML = `Soal Nomor ${num} <span class="text-on-surface-variant/30 font-normal">/ ${total}</span>`;
        const percentage = Math.round((num / total) * 100);
        dom.progressPercent.textContent = `${percentage}% Selesai`;
        dom.progressBar.style.width = `${percentage}%`;

        // Render Question Content
        dom.materiLabel.textContent = `Materi: ${q.materi || 'Umum'}`;
        dom.questionText.innerHTML = q.pertanyaan;

        // Render Image or Quote
        if (q.gambar || q.kutipan) {
            dom.imageContainer.style.display = "block";
            dom.imageEl.style.display = q.gambar ? "block" : "none";
            if (q.gambar) dom.imageEl.src = q.gambar;
            
            if (q.kutipan) {
                dom.quoteEl.parentElement.style.display = "flex";
                dom.quoteEl.textContent = q.kutipan;
            } else {
                dom.quoteEl.parentElement.style.display = "none";
            }
        } else {
            dom.imageContainer.style.display = "none";
        }

        // Render Options or Essay
        if (q.tipe === 'uraian') {
            dom.optionsGrid.style.display = "none";
            dom.essayContainer.style.display = "block";
            dom.essayInput.value = userAnswers[index] || "";
            
            dom.essayInput.oninput = (e) => {
                userAnswers[index] = e.target.value.trim() === "" ? null : e.target.value;
                renderSidebarNav(); // update UI navigator
            };
        } else {
            dom.essayContainer.style.display = "none";
            dom.optionsGrid.style.display = "grid";
            
            const labels = ['A', 'B', 'C', 'D', 'E'];
            dom.optionsGrid.innerHTML = "";
            q.opsi.forEach((optText, optIndex) => {
                let isSelected = false;
                if (q.tipe === 'pga') {
                    isSelected = userAnswers[index].includes(optIndex);
                } else {
                    isSelected = userAnswers[index] === optIndex;
                }
                
                const btn = document.createElement("button");
                btn.className = `w-full text-left flex items-start gap-4 p-6 rounded-3xl transition-all active:scale-[0.98] duration-200 border-2`;
                
                if (isSelected) {
                    btn.classList.add("bg-primary-fixed", "border-primary", "shadow-[0px_10px_30px_rgba(0,107,71,0.1)]");
                } else {
                    btn.classList.add("bg-surface-container-low", "hover:bg-surface-container-high", "border-transparent");
                }

                btn.onclick = () => selectAnswer(index, optIndex);

                btn.innerHTML = `
                    <div class="flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center font-headline font-bold text-lg transition-colors ${isSelected ? 'bg-primary text-white' : 'bg-surface-container-lowest text-on-surface-variant border border-outline-variant/30'}">
                        ${labels[optIndex]}
                    </div>
                    <div class="flex-1 mt-2.5">
                        <p class="${isSelected ? 'text-on-primary-fixed font-bold' : 'text-on-surface-variant font-medium'} leading-relaxed">${optText}</p>
                    </div>
                    ${isSelected ? `<span class="material-symbols-outlined text-primary mt-2.5 text-2xl" data-icon="${q.tipe === 'pga' ? 'check_box' : 'check_circle'}" style="font-variation-settings: 'FILL' 1;">${q.tipe === 'pga' ? 'check_box' : 'check_circle'}</span>` : ''}
                `;
                dom.optionsGrid.appendChild(btn);
            });
        }

        // Render Tips
        if (q.tipsBidang && userAnswers[index] !== null) {
            dom.tipContainer.style.display = "flex";
            dom.tipText.textContent = q.tipsBidang;
        } else {
            dom.tipContainer.style.display = "none";
        }

        // Render Sidebar Nav
        renderSidebarNav();

        // Check if next button should say Finish
        if (index === total - 1) {
            dom.btnNext.innerHTML = `<span>Selesai</span><span class="material-symbols-outlined" data-icon="done_all">done_all</span>`;
        } else {
            dom.btnNext.innerHTML = `<span>Selanjutnya</span><span class="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>`;
        }
    }

    function renderSidebarNav() {
        dom.navGrid.innerHTML = "";
        
        quizData.forEach((_, i) => {
            const el = document.createElement("div");
            
            if (i === currentIndex) {
                // Posisi saat ini
                el.className = "aspect-square flex items-center justify-center rounded-xl ring-2 ring-primary ring-offset-2 bg-primary-fixed text-on-primary-fixed text-sm font-bold cursor-pointer";
            } else {
                let isAnswered = false;
                if (quizData[i].tipe === 'pga') {
                    isAnswered = userAnswers[i] && userAnswers[i].length > 0;
                } else {
                    isAnswered = userAnswers[i] !== null && userAnswers[i] !== "";
                }

                if (isAnswered) {
                    // Sudah dijawab (PG, PGA, atau Uraian yang sudah diisi)
                    el.className = "aspect-square flex items-center justify-center rounded-xl bg-primary text-white text-sm font-bold cursor-pointer";
                } else {
                    // Belum dijawab
                    el.className = "aspect-square flex items-center justify-center rounded-xl bg-surface-container-low text-on-surface-variant text-sm font-medium hover:bg-surface-container-high transition-colors cursor-pointer border border-outline-variant/10";
                }
            }
            
            el.textContent = i + 1;
            el.onclick = () => {
                currentIndex = i;
                renderQuestion(currentIndex);
            };
            dom.navGrid.appendChild(el);
        });
    }

    function selectAnswer(qIndex, optIndex) {
        if (quizData[qIndex].tipe === 'pga') {
            const arr = userAnswers[qIndex];
            if (arr.includes(optIndex)) {
                arr.splice(arr.indexOf(optIndex), 1);
            } else {
                arr.push(optIndex);
            }
        } else {
            userAnswers[qIndex] = optIndex;
        }
        renderQuestion(qIndex); // re-render to show selection
    }

    // ── Fungsi Selesai Ujian (bisa dipanggil dari tombol sidebar atau btnNext terakhir atau timer) ──
    function finishExam() {
        let score = 0;
        let totalPG = 0;
        let essayCount = 0;

        quizData.forEach((q, i) => {
            if (q.tipe === 'pg') {
                totalPG++;
                if (userAnswers[i] === q.kunciJawaban) score++;
            } else if (q.tipe === 'pga') {
                totalPG++;
                const userArr = [...userAnswers[i]].sort();
                const keyArr = Array.isArray(q.kunciJawaban) ? [...q.kunciJawaban].sort() : [];
                if (userArr.length === keyArr.length && userArr.every((v, idx) => v === keyArr[idx])) {
                    score++;
                }
            } else if (q.tipe === 'uraian') {
                essayCount++;
            }
        });

        const nilaiObjektif = totalPG > 0 ? Math.round((score / totalPG) * 100) : 0;
        const essayNote = essayCount > 0
            ? `\n\nCatatan: ${essayCount} soal uraian tidak dinilai otomatis.`
            : '';

        alert(
            `✅ Ujian Selesai!\n\nNilai Obyektif (PG & PGA): ${nilaiObjektif}\n` +
            `(${score} benar dari ${totalPG} soal obyektif)` +
            essayNote
        );
    }

    // Expose ke global agar bisa dipanggil dari tombol inline HTML
    window.finishExam = finishExam;

    // Navigasi Prev/Next
    dom.btnPrev.onclick = () => {
        if (currentIndex > 0) {
            currentIndex--;
            renderQuestion(currentIndex);
        }
    };

    dom.btnNext.onclick = () => {
        if (currentIndex < quizData.length - 1) {
            currentIndex++;
            renderQuestion(currentIndex);
        } else {
            // Soal terakhir → selesai
            finishExam();
        }
    };

    // Mulai dari soal pertama
    renderQuestion(0);

    // Timer Ujian 90 Menit
    let timeLeft = 90 * 60; // dalam detik
    const timerDisplay = document.getElementById("timer-display");
    
    if (timerDisplay) {
        const timerInterval = setInterval(() => {
            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                timerDisplay.textContent = "00:00";
                alert("⏰ Waktu ujian telah habis! Jawaban Anda akan diselesaikan sekarang.");
                finishExam();
            } else {
                timeLeft--;
                const minutes = Math.floor(timeLeft / 60);
                const seconds = timeLeft % 60;
                timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
                
                // Peringatan jika sisa kurang dari 10 menit
                if (timeLeft === 10 * 60) {
                    timerDisplay.classList.add("text-error");
                    timerDisplay.classList.remove("text-secondary");
                }
            }
        }, 1000);
    }
});
