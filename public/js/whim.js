$(document).ready(function() {
  let currentCategoryId = null;
  let currentWhimId = null;

  const getAndRenderPost = () => {
    $.get('/api/whim/' + currentWhimId, function(data) {
      console.log('postData', data);
      currentCategoryId = data.CategoryId;
      console.log('currentCategoryId', currentCategoryId);
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

  const getAndRenderComments = () => {
    //let queryURL = '/?whimId=' + currentWhimId;
    $.get('/api/comment', {whimId: currentWhimId}, function(data) {
      console.log(data);
      let commentBlock = $('#commentBlock');
      commentBlock.empty();
      for(let i = 0; i < data.length; i++) {
        let commentBox = $('<div>');
        commentBox.addClass('box');
        let commentBoxText = $('<p>');
        commentBoxText.text(data[i].body);
        commentBox.append(commentBoxText);
        commentBlock.append(commentBox);
      }
    })
  }

  const createComment = () => {
    let commentInputText = $('#commentInputText')
    const body = commentInputText.val();
    const newComment = {
      body,
      WhimId: currentWhimId
    }
    $.post('/api/comment', newComment, function(data, status) {
      console.log(data, status);
      commentInputText.val('');
      // Hiding comment inputs
      let commentInputBlock = $('#commentInputBlock');
      commentInputBlock.addClass('is-hidden');
      getAndRenderComments();
    })
  }
  
  const showCommentInput = () => {
    let commentInputBlock = $('#commentInputBlock');
    commentInputBlock.removeClass('is-hidden');
  }

  const init = () => {
    let postBlock = $('#postBlock');
    postBlock.empty();
    let commentBlock = $('#commentBlock');
    commentBlock.empty();
    const pathArray = window.location.pathname.split('/');
    console.log('pathArray', pathArray);
    currentWhimId = pathArray[2] || null;
    getAndRenderPost();
    getAndRenderComments();
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


