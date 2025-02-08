project.nameconst projects = [
    {
        name: "📂 فایل‌های خودهیپنوتیزم و سابلیمینال",
        progress: 80,
        description: "هدف: تولید فایل‌های صوتی برای بهبود ذهنیت و انگیزه.",
        news: ["🎤 ضبط نهایی انجام شد", "🎼 موسیقی پس‌زمینه اضافه شد"],
        completed: false,
        fileUrl: ""
    },
    {
        name: "🤖 ربات‌های ترید",
        progress: 45,
        description: "هدف: توسعه ربات هوشمند برای معاملات خودکار.",
        news: ["🚀 پیاده‌سازی استراتژی‌های اولیه", "🐞 چندین باگ در تست شناسایی شد"],
        completed: false,
        fileUrl: ""
    },
    {
        name: "📖 یادگیری قرائت قرآن",
        progress: 60,
        description: "هدف: تقویت مهارت قرائت و حفظ قرآن.",
        news: ["✅ حفظ سوره‌های کوتاه کامل شد", "🎙 تمرین تلاوت آرام افزایش یافت"],
        completed: false,
        fileUrl: ""
    },
    {
        name: "🔥 تقویت شخصیت و عزت‌نفس",
        progress: 90,
        description: "هدف: افزایش اعتماد به نفس و مدیریت استرس.",
        news: ["💪 جلسات تمرینی موفقیت‌آمیز بود", "⚡ آخرین تغییرات برنامه اعمال شد"],
        completed: true,
        fileUrl: "https://example.com/self-esteem-guide.pdf"
    }
];

function renderProjects() {
    const container = document.getElementById("projects-container");
    container.innerHTML = "";

    projects.forEach(project => {
        const projectDiv = document.createElement("div");
        projectDiv.className = "project";

        const title = document.createElement("h2");
        title.textContent = project.name;

        const description = document.createElement("p");
        description.textContent = project.description;

        const progressBar = document.createElement("div");
        progressBar.className = "progress-bar";

        const progress = document.createElement("div");
        progress.className = "progress";
        progress.style.width = `${project.progress}%`;
        progress.textContent = `${project.progress}%`;

        if (project.progress <= 30) {
            progress.style.backgroundColor = "#e74c3c"; // قرمز
        } else if (project.progress <= 70) {
            progress.style.backgroundColor = "#f1c40f"; // زرد
        } else {
            progress.style.backgroundColor = "#27ae60"; // سبز
        }

        const newsDiv = document.createElement("div");
        newsDiv.className = "news";

        project.news.forEach(newsItem => {
            const newsItemDiv = document.createElement("div");
            newsItemDiv.textContent = `🔹 ${newsItem}`;
            newsDiv.appendChild(newsItemDiv);
        });

        progressBar.appendChild(progress);
        projectDiv.appendChild(title);
        projectDiv.appendChild(description);
        projectDiv.appendChild(progressBar);
        projectDiv.appendChild(newsDiv);

        if (project.completed && project.fileUrl) {
            const downloadButton = document.createElement("button");
            downloadButton.className = "download-button";
            downloadButton.textContent = "📥 دانلود فایل";
            downloadButton.onclick = () => window.open(project.fileUrl, "_blank");
            projectDiv.appendChild(downloadButton);
        }

        container.appendChild(projectDiv);
    });

    document.getElementById("last-update").textContent = `آخرین به‌روزرسانی: ${new Date().toLocaleString("fa-IR")}`;
}

function updateStatus() {
    alert("✅ اطلاعات پروژه‌ها به‌روزرسانی شد!");
    renderProjects();
}

renderProjects();
