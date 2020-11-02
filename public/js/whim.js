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
