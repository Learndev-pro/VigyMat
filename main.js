// Variable declatations
let app = document.getElementById('app') ;
let module , f ;

function render ( arr )
{
	arr.forEach( i => 
		{
			i.forEach( j =>
				{
					let box = document.createElement('div') ;
					let head = document.createElement('h3') ;
					let content = document.createElement('div');
					box.className = 'box';
					head.className = 'heading' ;
					content.className = 'content' ;
					head.innerHTML = obj[i][j][0] ;
					content.innerHTML = obj[i][j][1] ;
					box.appendChild(head) ;
					box.appendChild(content) ;
					app.appendChild(box) ;
				} );
		} ) ;
}
// Dynamic importing
async function d_import (url)
{
	try
	{
		let str = url.replace("https://learndev-pro.github.io/VigyMat",'') ;
		history.pushState({},'',url) ;
		import(`https://learndev-pro.github.io/VigyMat/js${str}.js`).then( m => 
			{
				module = m ;
				render( m.html ) ;
				f = m.f ;
			} ) ;
	}catch(error)
	{
		app.innerHTML += `<b>Import error</b> => ${error.name} : ${error.message}` ;
	}

}

// Dynamic links
function d_links ()
{
	let links = document.getElementByClassName('d_links') ;
	for ( let i = 0 ; i < links.length ; i++ )
	{
		links[i].onclick = ( event ) => {
                        d_import( links[i].href ) ;
                        event.preventDefault() ;
		}
	}
}

//Reloading
function reload()
{
	let url = window.location.href ;
	d_import(url) ;
}

window.onpopstate = () => reload() ;
reload() ;
