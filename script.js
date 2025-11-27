// Navigation scroll effect
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ 
        behavior: 'smooth' 
    });
}

// URL Shortener (Client-side simulation)
async function shortenUrl() {
    const longUrl = document.getElementById('longUrl').value;
    const resultDiv = document.getElementById('shortUrlResult');
    
    if (!longUrl) {
        resultDiv.innerHTML = '<p style="color: red;">Please enter a URL</p>';
        return;
    }
    
    // Simulate API call - in real implementation, this would call your backend
    resultDiv.innerHTML = '<p>Generating short URL...</p>';
    
    setTimeout(() => {
        const shortUrl = `https://short.url/${Math.random().toString(36).substr(2, 7)}`;
        resultDiv.innerHTML = `
            <p>Short URL: <a href="${longUrl}" target="_blank" style="color: #00d9ff;">${shortUrl}</a></p>
            <small>Note: This is a demo. In production, this would actually shorten the URL.</small>
        `;
    }, 1000);
}

// Markdown Editor
function updateMarkdownPreview() {
    const input = document.getElementById('markdownInput').value;
    const preview = document.getElementById('markdownPreview');
    
    // Simple markdown parsing
    let html = input
        .replace(/^### (.*$)/gim, '<h3>$1</h3>')
        .replace(/^## (.*$)/gim, '<h2>$1</h2>')
        .replace(/^# (.*$)/gim, '<h1>$1</h1>')
        .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
        .replace(/\*(.*)\*/gim, '<em>$1</em>')
        .replace(/\n/g, '<br>');
    
    preview.innerHTML = html;
}

// JSON Formatter
function formatJSON() {
    const input = document.getElementById('jsonInput').value;
    const output = document.getElementById('jsonOutput');
    
    try {
        const parsed = JSON.parse(input);
        output.textContent = JSON.stringify(parsed, null, 2);
        output.style.color = '#00ff00';
    } catch (e) {
        output.textContent = 'Invalid JSON: ' + e.message;
        output.style.color = '#ff4444';
    }
}

// Initialize tools
document.addEventListener('DOMContentLoaded', function() {
    // Initialize markdown preview
    updateMarkdownPreview();
    document.getElementById('markdownInput').addEventListener('input', updateMarkdownPreview);
    
    // Initialize JSON formatter with example
    formatJSON();
});

// Add typing effect to hero section
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    
    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }
    typing();
}

// Initialize typing effect when page loads
window.addEventListener('load', function() {
    const heroTitle = document.querySelector('.hero-content h1');
    const originalText = heroTitle.innerHTML;
    heroTitle.innerHTML = '';
    setTimeout(() => typeWriter(heroTitle, originalText), 500);
});