import posts from './data.js';
import renderPosts from './renderPosts.js';


renderPosts(posts);




const headerDOM = document.querySelector('header');

headerDOM.innerHTML = '<span>Labas rytas. </span>';

headerDOM.innerHTML += '<span>Ka tu sakai?</span>';



/*

renderPosts
    for -> renderSinglePost
        renderHeader
        renderContent
            renderContentText
            renderContentGallery
        renderFooter

*/
