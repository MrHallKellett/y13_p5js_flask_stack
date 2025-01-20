   // p5.js sketch
numbers = []

   function setup() {
    // Create a canvas that fits the window
    createCanvas(windowWidth, windowHeight);
    background(220); // Light gray background
  }

  function draw() {
    // Draw a circle wherever the mouse is
    fill(100, 150, 255, 150); // Light blue with some transparency
    drawNumbers()

  }

  function drawNumbers()
  {
    for (number of numbers)
    {
        text(number.number, number.x, number.y)   
    }
  }

  function windowResized() {
    // Resize the canvas when the window is resized
    resizeCanvas(windowWidth, windowHeight);
    background(220);
  }

  function mouseClicked()
  {
        number = getNumber()
        console.log("Got a number its", number)
        numbers.push({number:number, x:mouseX, y:mouseY})
  }

  async function getNumber() {
    const url = "api/get_number"
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      console.log("was this promosed", json)
      return json.number
    } catch (error) {
      console.error(error.message);
    }
  }