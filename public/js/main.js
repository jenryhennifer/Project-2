$(document).ready(function() {
  //$(document).on("click", "#createPostBtn", createPost);
  let currentCategory = null;
  let currentCategoryName = '';
  
  const getAndRenderPosts = () => {
    // api call to posts with the category id
    // render all posts
    let queryURL = '/?categoryId=' + currentCategory;
    $.get('/api/whim' + queryURL, function(data) {
      let postBox = $('#postBox');
      postBox.empty();
      console.log('postData',data);
      for(let i = 0; i < data.length; i++) {
        let currentWhim = data[i].id;
        let postEl = $('<div>');
        postEl.addClass('box');
        let postElTitle = $('<h1>');
        let postElLink = $('<a>');
        postElLink.addClass('is-size-4');
        postElLink.text(data[i].title);
        postElLink.attr('id', 'postElLink');
        postElLink.attr('href', '/whim/' + currentWhim);
        postElTitle.append(postElLink);
        let postElBody = $('<h1>');
        postElBody.text(data[i].body);
        postElTitle.append(postElBody);
        postEl.append(postElTitle);
        postBox.append(postEl);
      }
      console.log('getAndRenderPosts', data);
    });
  }

  const showPostInputs = () => {
    let createPostInputs = $('#createPostInputs');
    createPostInputs.removeClass('is-hidden');
  }

  const createPost = () => {
    const titleInput = $('#postTitle');
    const bodyInput = $('#postDesc');
    const title = titleInput.val();
    const body = bodyInput.val();
    const newPost = {
      title,
      body,
      CategoryId: currentCategory,
    }
    $.post('/api/whim', newPost, function(data, status) {
      console.log('createPost', data, status);
      // getAndRenderPosts();
      titleInput.val('');
      bodyInput.val('');
      // Hiding post inputs
      let createPostInputs = $('#createPostInputs');
      createPostInputs.addClass('is-hidden');
      getAndRenderPosts();
    });
  }
  
  // const onChangeCategory = () => {
  //   // re-render categories
  //   // re-render posts with currentCategory
  // }

  const getAndRenderCategories = () => {
    console.log('getCategories');
    $.get('/api/category', function(data) {
      //console.log('data', data);
      let catBox = $('#catBox');
      let catName = $('#categoryName');
      console.log('catBox', catBox);
      catBox.empty();
      for(let i = 0; i < data.length; i++) {
        if (currentCategory === null && i === 0) {
          currentCategory = data[i].id;
        }
        console.log('data[i]', data[i], 'currentCategory', currentCategory);
        console.log('data[i]', data[i], 'currentCategoryName', data[i].name.toString());
        console.log('data[i].id, currentCategory', data[i].id.toString(), currentCategory.toString());
        let catElement = $("<p>");
        let catElementAnchor = $("<a>");
        if (data[i].id.toString() === currentCategory.toString()) {
          catElementAnchor.addClass("has-text-danger");
          currentCategoryName = data[i].name;
          catName.text(currentCategoryName);
        }
        // Category Element Anchor Link
        catElementAnchor.text(data[i].name);
        catElementAnchor.attr('href', `/category/${data[i].id}`);
        catElement.append(catElementAnchor);
        catBox.append(catElement);
        //currentCategoryName = data[i].name;

      }
      getAndRenderPosts();
    });
  }
  console.log('document ready');

  const addCategory = () => {
    let catInput = $('#catInput');
    // console.log(catInput.value);
    const name = catInput.val();

    $.post('/api/category', { name }, function(data, status) {
      //console.log('data', data, status);
      getAndRenderCategories();
      // clearing input form
      catInput.val('');
    });
  }

  const deleteCategory = () => {
    console.log(currentCategory);
    $.ajax({
      url: '/api/category/' + currentCategory,
      method: 'DELETE'
    }).then(getAndRenderCategories());
  }

  const init = () => {
    getAndRenderCategories();
    const pathArray = window.location.pathname.split('/');
    console.log('pathArray', pathArray);
    currentCategory = pathArray[2] || null;
  }

  init();
  $(document).on("click", "#catBtn", addCategory);
  $(document).on("click", "#catDelete", deleteCategory);
  $(document).on("click", "#showCreatePost", showPostInputs);
  $(document).on("click", "#postBtn", createPost);

});
