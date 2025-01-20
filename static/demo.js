// define global variables here
numbers = []

function setup()
{
  createCanvas(windowWidth, windowHeight);
  background(220);
}

function draw()
{
  text("Click the screen to get a number from Python ☺", 20, 20)
  fill(100, 150, 255, 150); // Light blue with some transparency
  drawNumbers()
}

function drawNumbers()
{
  for (number of numbers)
  {
      text("Python gave me this number: " + number.number, number.x, number.y)   
  }
}

// mouseClicked is one of the built-in p5.js event handlers - see https://editor.p5js.org/dansakamoto/sketches/r1tT87QKm
function mouseClicked()
{
      // here we are calling an asynchronous function from a non-async scope
      // therefore we have to use .then()
      number = getNumber().then(number => {
      numbers.push({number:number, x:mouseX, y:mouseY}) // appends a JS object to the numbers list
      });
}

async function getNumber() {
  // fetch API  GET request function based on boilerplate from
  // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

  const url = "api/get_number"
  try
  {
    const response = await fetch(url);
    if (!response.ok)
    {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json()

    return json.number
  }
  catch (error)
  {
    console.error(error.message);
  }
}