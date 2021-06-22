//animation for articles

const articlesImages = document.querySelectorAll('.article-img');
const articlesText =  document.querySelectorAll('.article__text')
const articlesHeadings = document.querySelectorAll('.article__title')

const options = {
    threshold: 0.5
}
const articleObserver = new IntersectionObserver(function(entries, articleObserver ){
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            return
        } else {
            entry.target.classList.add('show-up')
            articleObserver.unobserve(entry.target)
        }
    } )
}, options)

articlesImages.forEach(img => articleObserver.observe(img));
articlesHeadings.forEach(heading => articleObserver.observe(heading));
articlesText.forEach(text => articleObserver.observe(text));