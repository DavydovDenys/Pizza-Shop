function add_to_cart(id)
{	
	var key = 'product_' + id;

	var x = window.localStorage.getItem(key);
	x = x * 1 + 1;
	window.localStorage.setItem(key, x);
}

function total_elements()
{
	var total = 0
	for (var i = 0; i < localStorage.length; i++)
	{
    	var x = localStorage.getItem(localStorage.key(i));
    	total = x * 1 + total;
	}
	alert('Total products:' + total);
}