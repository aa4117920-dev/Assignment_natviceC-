// output("them load is connected------",4,8)		//connect msg
	
// Get style tag
let style = document.querySelector("style");

// Get nav element
let nav = document.querySelector("#nav"); // آپ کے پاس آئی ڈی 'nav' ہے

// ہم نے select ٹیگ کو ایک id "sl-box" دے دی ہے
nav.innerHTML += `
<select id="sl-box">
  <option value="0">Them1</option>
  <option value="1">Them2</option>
  <option value="2">Them3</option>
  <option value="3">Them4</option>
  <option value="4">Default</option>
</select>`;

style.innerHTML += `
#sl-box{
	background-color:black;
	border:none;
	color:#fff;
	padding:4px;
	border-radius:5px;
}
`;

let selectBox = document.querySelector("#sl-box");

selectBox.addEventListener('change', (e) => {
    let i = parseInt(e.target.value); 
    let data = themsdata(i);


    if (typeof data === "object" && data !== null) {
      let styling = document.documentElement.style;
      
      styling.setProperty('--body-bg', data.bodyBgcl);
      styling.setProperty('--section-bg', data.sectionBgcl);
      styling.setProperty('--button-bg', data.btnBgcl);
      styling.setProperty('--databox-bg', data.databoxBgcl);
      styling.setProperty('--button-color', data.buttoncl);
      styling.setProperty('--databox-color', data.databoxcl);
      
      // console.log("Root CSS variables updated successfully!");
    }

    document.title = "button no:" + (i + 1) + " click";
});

function themsdata(themSl) {
  let them1 = {
    "bodyBgcl": "lightblue",
    "sectionBgcl": "blue",
    "btnBgcl": "white",
    "databoxBgcl": "burlywood", // 'lightbrown' کوئی آفیشل کلر نہیں تھا، اس لیے burlywood کیا
    "buttoncl": "#000",
    "databoxcl": "white",
  };

  let them2 = {
    "bodyBgcl": "#1e1e2e",
    "sectionBgcl": "#252538",
    "btnBgcl": "#ff79c6",
    "databoxBgcl": "#282a36",
    "buttoncl": "#fff",
    "databoxcl": "#f8f8f2",
  };

  let them3 = {
    "bodyBgcl": "#e8f5e9",
    "sectionBgcl": "#2e7d32",
    "btnBgcl": "#81c784",
    "databoxBgcl": "#c8e6c9",
    "buttoncl": "#fff",
    "databoxcl": "#1b5e20",
  };

  let them4 = {
    "bodyBgcl": "#fdf6e3",
    "sectionBgcl": "#d33682",
    "btnBgcl": "#b58900",
    "databoxBgcl": "#eee8d5",
    "buttoncl": "#fff",
    "databoxcl": "#073642",
  };

  // ڈیفالٹ یا پرانا تھیم واپس کرنے کے لیے
  let defaultThem = {
    "bodyBgcl": "#666",
    "sectionBgcl": "#222",
    "btnBgcl": "yellow",
    "databoxBgcl": "rgba(200, 200, 20, 0.7)",
    "buttoncl": "#333",
    "databoxcl": "#111",
  };

  switch(themSl) {
    case 0: return them1;
    case 1: return them2;
    case 2: return them3;
    case 3: return them4;
    default: return defaultThem;
  }
}

