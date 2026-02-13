# Root Directory

This directory only contains an `index.html` file.

The purpose of this file is to redirect visitors to the actual home page of the website.  
GitHub Pages requires an `index.html` file in the root directory (`/`) to function properly.

The redirection script:

```html
<script>
  // Redirect to the website's home page because GitHub cannot function without an index.html in the root directory (/).
  window.location.href = "./code/home/home.html";
</script>
