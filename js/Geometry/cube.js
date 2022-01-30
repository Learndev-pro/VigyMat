function say_hello(){
	prompt("Hello!");
}

let html =
	[
		[ 'About' , `<p onclick="${say_hello()}">Hello world</p>`],
		[ 'something' , "hi"]
	];
export {html}
