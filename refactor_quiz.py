import codecs

with codecs.open('js/quiz.js', 'r', 'utf-8') as f:
    text = f.read()

# 1. Add global variable
if 'let isReviewMode = false;' not in text:
    text = text.replace('let quizData = [];', 'let quizData = [];\n    let isReviewMode = false;')

# 2. Modify finishExam to bind the review button
review_btn_js = '''
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
'''
if 'const btnReview' not in text:
    text = text.replace('modal.style.display = \'flex\';', 'modal.style.display = \'flex\';' + review_btn_js)

# 3. Update renderQuestion logic for PG
pg_original = '''
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
                    dom.optionsGrid.appendChild(btn);
'''

pg_review = '''
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
'''
if 'if (isReviewMode)' not in text:
    text = text.replace(pg_original, pg_review)

# 4. Update renderQuestion logic for Menjodohkan
mj_original = '''
                select.onchange = (e) => {
                    userAnswers[index] = parseInt(e.target.value);
                    renderSidebarNav();
                };
                
                container.appendChild(label);
                container.appendChild(select);
                dom.optionsGrid.appendChild(container);
            }
        }
'''

mj_review = '''
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
'''
if 'Jawaban Benar:' not in text:
    text = text.replace(mj_original, mj_review)

# 5. Update renderQuestion logic for Uraian
ur_original = '''
            dom.essayInput.value = userAnswers[index] || '';
            dom.essayInput.oninput = (e) => {
                userAnswers[index] = e.target.value;
                renderSidebarNav();
            };
        }
'''

ur_review = '''
            dom.essayInput.value = userAnswers[index] || '';
            if (isReviewMode) {
                dom.essayInput.disabled = true;
                dom.essayInput.classList.add('opacity-70');
                
                // Cek apakah panduan sudah ada agar tidak duplikat saat next/prev
                let existingGuide = document.getElementById('uraian-guide');
                if (!existingGuide) {
                    const guide = document.createElement('div');
                    guide.id = 'uraian-guide';
                    guide.className = 'mt-4 p-5 rounded-2xl bg-primary-fixed/20 border border-primary/20';
                    guide.innerHTML = `
                        <h4 class="font-bold text-primary mb-2 flex items-center gap-2"><span class="material-symbols-outlined text-lg">menu_book</span> Panduan / Kunci Jawaban</h4>
                        <div class="text-on-surface-variant text-sm leading-relaxed">${q.tipsBidang || 'Tidak ada panduan khusus.'}</div>
                    `;
                    dom.essayContainer.appendChild(guide);
                }
            } else {
                dom.essayInput.disabled = false;
                dom.essayInput.classList.remove('opacity-70');
                let existingGuide = document.getElementById('uraian-guide');
                if (existingGuide) existingGuide.remove();
                
                dom.essayInput.oninput = (e) => {
                    userAnswers[index] = e.target.value;
                    renderSidebarNav();
                };
            }
        }
'''
if 'uraian-guide' not in text:
    text = text.replace(ur_original, ur_review)

# 6. Disable Finish button when in Review Mode
btn_logic = '''
        if (index === quizData.length - 1) {
            dom.btnNext.innerHTML = '<span>Selesai</span><span class="material-symbols-outlined" data-icon="done">done</span>';
            dom.btnNext.classList.replace('bg-primary', 'bg-green-600');
            dom.btnNext.classList.replace('hover:bg-primary-container', 'hover:bg-green-700');
            dom.btnNext.onclick = finishExam;
        } else {
'''

btn_logic_new = '''
        if (isReviewMode && index === quizData.length - 1) {
            dom.btnNext.innerHTML = '<span>Selesai Review</span><span class="material-symbols-outlined" data-icon="home">home</span>';
            dom.btnNext.classList.replace('bg-primary', 'bg-tertiary');
            dom.btnNext.classList.replace('hover:bg-primary-container', 'hover:bg-tertiary-container');
            dom.btnNext.onclick = () => window.location.href = 'latihan-soal.html';
        } else if (index === quizData.length - 1) {
            dom.btnNext.innerHTML = '<span>Selesai</span><span class="material-symbols-outlined" data-icon="done">done</span>';
            dom.btnNext.classList.replace('bg-primary', 'bg-green-600');
            dom.btnNext.classList.replace('hover:bg-primary-container', 'hover:bg-green-700');
            dom.btnNext.onclick = finishExam;
        } else {
'''
if 'Selesai Review' not in text:
    text = text.replace(btn_logic, btn_logic_new)

# write
with codecs.open('js/quiz.js', 'w', 'utf-8') as f:
    f.write(text)

print('Updated quiz.js successfully!')
