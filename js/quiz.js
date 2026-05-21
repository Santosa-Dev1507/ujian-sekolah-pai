document.addEventListener("DOMContentLoaded", () => {
    let quizData = [];
    let isReviewMode = false;
    const urlParams = new URLSearchParams(window.location.search);
    let year = urlParams.get('year');
    let type = urlParams.get('type');
    
    // Prioritaskan parameter type dari URL untuk menentukan tahun
    if (type === 'asas-genap') {
        year = '2026';
    } else if (type === 'asas-genap-2024') {
        year = '2024-genap';
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
        } else if (savedType === 'asas-genap-2024') {
            year = '2024-genap';
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
    } else if (year === '2024-genap' && typeof quizData2024 !== 'undefined') {
        quizData = quizData2024;
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
            if (q.tipe === 'pg' || q.tipe === 'pga') {
                dom.optionsGrid.className = "grid grid-cols-1 md:grid-cols-2 gap-4";
                q.opsi.forEach((optText, optIndex) => {
                    let isSelected = false;
                    if (q.tipe === 'pga') {
                        isSelected = userAnswers[index].includes(optIndex);
                    } else {
                        isSelected = userAnswers[index] === optIndex;
                    }
                    
                    const btn = document.createElement("button");
                    btn.className = `w-full text-left flex items-start gap-3 md:gap-4 p-4 md:p-6 rounded-3xl transition-all active:scale-[0.98] duration-200 border-2`;
                    
                    if (isReviewMode) {
                        btn.onclick = null;
                        btn.classList.add("cursor-default");
                        const isCorrectKey = q.tipe === 'pga' ? q.kunciJawaban.includes(optIndex) : q.kunciJawaban === optIndex;
                        
                        if (isCorrectKey) {
                            btn.classList.add("bg-green-100", "border-green-500", "shadow-sm");
                            btn.innerHTML = `
                                <div class="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-2xl flex items-center justify-center font-headline font-bold text-base md:text-lg bg-green-500 text-white">
                                    ${labels[optIndex]}
                                </div>
                                <div class="flex-1 mt-1.5 md:mt-2.5 min-w-0">
                                    <p class="text-green-800 font-bold leading-relaxed break-words whitespace-normal">${optText}</p>
                                </div>
                                <span class="material-symbols-outlined text-green-600 mt-1.5 md:mt-2.5 text-xl md:text-2xl" data-icon="check_circle" style="font-variation-settings: 'FILL' 1;">check_circle</span>
                            `;
                        } else if (isSelected && !isCorrectKey) {
                            btn.classList.add("bg-red-50", "border-red-400", "shadow-sm");
                            btn.innerHTML = `
                                <div class="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-2xl flex items-center justify-center font-headline font-bold text-base md:text-lg bg-red-500 text-white">
                                    ${labels[optIndex]}
                                </div>
                                <div class="flex-1 mt-1.5 md:mt-2.5 min-w-0">
                                    <p class="text-red-700 font-bold leading-relaxed break-words whitespace-normal">${optText}</p>
                                </div>
                                <span class="material-symbols-outlined text-red-500 mt-1.5 md:mt-2.5 text-xl md:text-2xl" data-icon="cancel" style="font-variation-settings: 'FILL' 1;">cancel</span>
                            `;
                        } else {
                            btn.classList.add("bg-surface-container-low", "opacity-60", "border-transparent");
                            btn.innerHTML = `
                                <div class="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-2xl flex items-center justify-center font-headline font-bold text-base md:text-lg bg-surface-container-lowest text-on-surface-variant border border-outline-variant/30">
                                    ${labels[optIndex]}
                                </div>
                                <div class="flex-1 mt-1.5 md:mt-2.5 min-w-0">
                                    <p class="text-on-surface-variant font-medium leading-relaxed break-words whitespace-normal">${optText}</p>
                                </div>
                            `;
                        }
                    } else {
                        if (isSelected) {
                            btn.classList.add("bg-primary-fixed", "border-primary", "shadow-[0px_10px_30px_rgba(0,107,71,0.1)]");
                        } else {
                            btn.classList.add("bg-surface-container-low", "hover:bg-surface-container-high", "border-transparent");
                        }

                        btn.onclick = () => selectAnswer(index, optIndex);

                        btn.innerHTML = `
                            <div class="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-2xl flex items-center justify-center font-headline font-bold text-base md:text-lg transition-colors ${isSelected ? 'bg-primary text-white' : 'bg-surface-container-lowest text-on-surface-variant border border-outline-variant/30'}">
                                ${labels[optIndex]}
                            </div>
                            <div class="flex-1 mt-1.5 md:mt-2.5 min-w-0">
                                <p class="${isSelected ? 'text-on-primary-fixed font-bold' : 'text-on-surface-variant font-medium'} leading-relaxed break-words whitespace-normal">${optText}</p>
                            </div>
                            ${isSelected ? `<span class="material-symbols-outlined text-primary mt-1.5 md:mt-2.5 text-xl md:text-2xl" data-icon="${q.tipe === 'pga' ? 'check_box' : 'check_circle'}" style="font-variation-settings: 'FILL' 1;">${q.tipe === 'pga' ? 'check_box' : 'check_circle'}</span>` : ''}
                        `;
                    }
                    dom.optionsGrid.appendChild(btn);
                });
            } else if (q.tipe === 'menjodohkan') {
                // Tampilan Khusus Menjodohkan menggunakan Dropdown (Select)
                dom.optionsGrid.className = "w-full"; // Override grid layout for dropdown
                
                const container = document.createElement("div");
                container.className = "w-full bg-surface-container-low p-6 md:p-8 rounded-[2rem] border border-outline-variant/20";
                
                const label = document.createElement("label");
                label.className = "block text-sm font-bold text-on-surface-variant mb-4 uppercase tracking-widest";
                label.textContent = "Pilih Pasangan yang Tepat:";
                
                const select = document.createElement("select");
                select.className = "w-full p-5 rounded-2xl border-2 border-outline-variant/30 bg-surface-container-lowest text-on-surface text-base md:text-lg focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none shadow-sm cursor-pointer appearance-none";
                select.style.backgroundImage = "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23006b47%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')";
                select.style.backgroundRepeat = "no-repeat";
                select.style.backgroundPosition = "right 1.5rem top 50%";
                select.style.backgroundSize = "1rem auto";
                
                let optionsHTML = `<option value="" disabled ${userAnswers[index] === null ? 'selected' : ''}>-- Ketuk untuk Memilih Jawaban --</option>`;
                q.opsi.forEach((optText, optIndex) => {
                    const letter = String.fromCharCode(65 + optIndex);
                    optionsHTML += `<option value="${optIndex}" ${userAnswers[index] === optIndex ? 'selected' : ''}>${letter}. ${optText.replace(/<br>/g, ' ')}</option>`;
                });
                
                select.innerHTML = optionsHTML;
                if (isReviewMode) {
                    select.disabled = true;
                    select.classList.add('opacity-70');
                    
                    const correctAns = document.createElement('div');
                    correctAns.className = 'mt-4 p-4 rounded-xl bg-green-100 border border-green-500 text-green-800 text-sm font-bold flex gap-2 items-start';
                    correctAns.innerHTML = `<span class="material-symbols-outlined" style="font-size: 1.25rem;">check_circle</span> <div>Jawaban Benar:<br><span class="font-normal">${String.fromCharCode(65 + q.kunciJawaban)}. ${q.opsi[q.kunciJawaban]}</span></div>`;
                    
                    select.onchange = null;
                    container.appendChild(label);
                    container.appendChild(select);
                    container.appendChild(correctAns);
                } else {
                    select.onchange = (e) => {
                        userAnswers[index] = parseInt(e.target.value);
                        renderSidebarNav();
                    };
                    container.appendChild(label);
                    container.appendChild(select);
                }
                dom.optionsGrid.appendChild(container);
            }
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
                const userArr = Array.isArray(userAnswers[i]) ? [...userAnswers[i]].sort() : [];
                const keyArr = Array.isArray(q.kunciJawaban) ? [...q.kunciJawaban].sort() : [];
                if (userArr.length === keyArr.length && userArr.every((v, idx) => v === keyArr[idx])) {
                    score++;
                }
            } else if (q.tipe === 'uraian') {
                essayCount++;
            }
        });

        const nilaiObjektif = totalPG > 0 ? Math.round((score / totalPG) * 100) : 0;
        
        // Update Modal UI
        const modal = document.getElementById('result-modal');
        const modalContent = document.getElementById('result-modal-content');
        
        if (modal && modalContent) {
            document.getElementById('result-score').textContent = nilaiObjektif;
            document.getElementById('result-correct').textContent = score;
            document.getElementById('result-total').textContent = totalPG;
            
            const essayNote = document.getElementById('result-essay-note');
            if (essayCount > 0) {
                essayNote.textContent = `Catatan: ${essayCount} soal uraian tidak dinilai otomatis oleh sistem.`;
                essayNote.style.display = 'block';
            } else {
                essayNote.style.display = 'none';
            }
            
            // Tampilkan Modal
            modal.style.display = 'flex';
            // Bind Review Button
            const btnReview = document.getElementById('btn-review');
            if (btnReview) {
                btnReview.onclick = () => {
                    isReviewMode = true;
                    modal.style.display = 'none';
                    
                    // Hide timer
                    const timerUI = document.getElementById('timer-display');
                    if (timerUI) timerUI.parentElement.parentElement.style.display = 'none';
                    
                    // Remove btnSelesai from sidebar if exists
                    const btnSelesaiSidebar = document.getElementById('btn-selesai-sidebar');
                    if (btnSelesaiSidebar) btnSelesaiSidebar.style.display = 'none';
                    
                    // Go to first question and render
                    currentQuestionIndex = 0;
                    renderQuestion(0);
                    renderSidebarNav();
                };
            }

            
            // Animasi pop-in
            setTimeout(() => {
                modalContent.classList.remove('scale-95', 'opacity-0');
                modalContent.classList.add('scale-100', 'opacity-100');
            }, 50);
        } else {
            // Fallback jika HTML modal belum ter-load (safeguard)
            const essayText = essayCount > 0 ? `\\n\\nCatatan: ${essayCount} soal uraian tidak dinilai otomatis.` : '';
            alert(`✅ Ujian Selesai!\\n\\nNilai Obyektif (PG & PGA): ${nilaiObjektif}\\n(${score} benar dari ${totalPG} soal obyektif)${essayText}`);
        }
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
