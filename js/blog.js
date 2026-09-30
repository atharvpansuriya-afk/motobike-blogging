const blogContainer=document.getElementById("blogContainer");
blogs.forEach(blog=>{blogContainer.innerHTML+=`<article class="blog-card large-blog"><img src="${blog.image}" alt="${blog.title}"><div class="blog-content"><span>${blog.category}</span><h2>${blog.title}</h2><small>${blog.date}</small><p>${blog.text}</p><button class="btn primary-btn" onclick="readBlog('${blog.title.replace(/'/g,"\\'")}')">Read Article →</button></div></article>`;});
function readBlog(title){alert("Blog Article: "+title+"\\n\\nFull article content can be added here.");}
