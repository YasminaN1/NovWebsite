let userName = prompt('What is your name?')
let adjective1 = prompt('Pick a positive emotion/feeling!')
let place = prompt('Where would you like to begin your journey?')
let time = prompt('What time do you think is best?')
let adjective2 = prompt('Enter an adjective to describe the item! e.g., sturdy, lightweight')
let noun1 = prompt('Enter a noun to specify the item! e.g., backpack, compass')
let pluralNoun1 = prompt('Enter a plural noun for something essential to bring! e.g., flashlights, snacks, ropes')
let exclamation = prompt('make up a code word if something dangerous or exciting happens!')

let content = `<p>Dear <u>${userName}</u>,</p>

<p> I hope this letter finds you feeling <u>${adjective1}</u> and ready for an adventure! The Pogues and I have discovered an old map that could lead us straight to the legendary crown of the Outer Banks.

We’ll be meeting at <u>${place}</u> at <u>${time}</u> to begin our journey. Make sure to pack a <u>${adjective2} ${noun1}</u> and don’t forget your <u>${pluralNoun1}</u>—trust me, we’ll need them.

If we run into trouble, just yell <u>"${exclamation}"</u> and we’ll stick to the plan. I can’t wait to see you there—let’s make history, Pogues-style! </p>
`; 

document.getElementById("container").innerHTML=content;