chrome.app.runtime.onLaunched.addListener(() => {
  chrome.app.window.create('index.html', {
    id: '100shapesScaffolder',
    innerBounds: {
      width: 500,
      height: 600,
      minWidth: 500,
      minHeight: 600
    }
  });
});