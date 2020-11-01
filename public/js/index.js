// temp dummy data
// const getCategoryData = {
//   Categories: [
//     {id: 1, name: 'Category1'},
//     {id: 2, name: 'Category1'},
//     {id: 3, name: 'Category1'},
//     {id: 4, name: 'Category1'},
//   ],
// };

// const getPostsData = {
//   Posts: [
//     {id: 1, title: 'Title1', description: 'Description1', likes: '1', categoryId: 1},
//     {id: 2, title: 'Title2', description: 'Description2', likes: '2', categoryId: 2},
//     {id: 3, title: 'Title3', description: 'Description3', likes: '3', categoryId: 3},
//     {id: 4, title: 'Title4', description: 'Description4', likes: '4', categoryId: 4},
//   ],
// };

// const getCommentsData = {
//   Comments: [
//     {id: 1, description: 'Description1', likes: '1', postId: 1},
//     {id: 2, description: 'Description2', likes: '2', postId: 2},
//     {id: 3, description: 'Description3', likes: '3', postId: 3},
//     {id: 4, description: 'Description4', likes: '4', postId: 4},
//   ],
// };

$(document).ready(function() {
  //$(document).on("click", "#createPostBtn", createPost);
  let currentCategory = null;
  
  const getAndRenderPosts = () => {
    // api call to posts with the category id
    // render all posts

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
      console.log('catBox', catBox);
      catBox.empty();
      for(let i = 0; i < data.length; i++) {
        if (currentCategory === null && i === 0) {
          currentCategory = data[i].id;
        }
        // console.log('loop');
        console.log('data[i]', data[i], 'currentCategory', currentCategory);
        console.log('data[i].id, currentCategory', data[i].id.toString(), currentCategory.toString());
        let catElement = $("<p>");
        let catElementAnchor = $("<a>");
        //catElement.addClass("button");
        if (data[i].id.toString() === currentCategory.toString()) {
          catElement.addClass("has-text-danger");
        }
        catElementAnchor.text(data[i].name);
        catElementAnchor.attr('href', `/category/${data[i].id}`);
        catElement.append(catElementAnchor);
        catBox.append(catElement);
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
      console.log('data', data, status);
      getAndRenderCategories();
      catInput.empty();
    });
  }

  const init = () => {
    getAndRenderCategories();
    const pathArray = window.location.pathname.split('/');
    console.log('pathArray', pathArray);
    currentCategory = pathArray[2] || null;
  }

  init();
  $(document).on("click", "#catBtn", addCategory);
  //getPosts();

  // getPosts = () => {
  //   $.get("/api/whim", function(data) {
  //     var rowsToAdd = [];
  //     for (var i = 0; i < data.length; i++) {
  //       rowsToAdd.push(createPostsRow(data[i]));
  //     }
  //     renderAuthorList(rowsToAdd);
  //     nameInput.val("");
  //   });
  // }

  // createPostsRow = () => {
  //   console.log('works');
  //   var categoryHeader = $('<h1>Category Name</h1>');

  // }

  // addCategory = () => {
  //   console.log('works');
  // }

  // createPost = () => {
  //   $.post('/api/whim', function(data) {
      
  //   });
  // }
});
