/* copy stuff in from index.js

  let currentCategoryId = null;

  init function:
    clear everything
    get current post id from path

    get and render post function
      get the post from /api/whim/:id
      set currentCateogry id from post
      create the elements
      create the function to delete the post

    get and render comments function
      get comments /api/comment with body {whimId: currentWhimId}
  
  // like post function:
  //   put /whim/post body {whimId}


  create comment function:
    take the input and 
    POST /api/comment with body {body, WhimId}
    init()
  
  // like comment function
  delete comment function
  
  back button fucntion:
    go to /category/${currentCategoryId}

*/
$(document).ready(function() {
  let currentCategoryId = null;

  const getAndRenderPost = () => {
    $.get('/api/whim/' + currentCategoryId, function(data) {
      console.log(data);
      let postBlock = $('#postBlock');
      let postBlockTitle = $('<h1>');
      postBlockTitle.addClass('is-size-3');
      postBlockTitle.text(data.title);
      let postBlockBody = $('<p>');
      postBlockBody.text(data.body);
      postBlock.append(postBlockTitle);
      postBlock.append(postBlockBody);
    });
  }

  const createComment = () => {
    let commentBox = $('<div>');
    commentBox.addClass('box');
    let commentInput = $('#commentInput');
    commentInput.addClass('is-hidden');
  }
  
  const showCommentInput = () => {
    let commentInput = $('#commentInput');
    commentInput.removeClass('is-hidden');
  }

  const init = () => {
    let postBlock = $('#postBlock');
    postBlock.empty();
    const pathArray = window.location.pathname.split('/');
    console.log('pathArray', pathArray);
    currentCategoryId = pathArray[2] || null;
    getAndRenderPost();
  }

  init();
  // Back Button 
  $(document).on("click", "#backBtn", function() {
    window.location.href = `/category/${currentCategoryId}`;
  });
  // Add Comment Button
  $(document).on("click", "#createCommentBtn", showCommentInput);
  $(document).on("click", "#addCommentBtn", createComment);
});


