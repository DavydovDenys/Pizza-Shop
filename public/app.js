function add_to_cart(id)
{	
	var key = 'product_' + id;

	var x = window.localStorage.getItem(key);
	x = x * 1 + 1;
	window.localStorage.setItem(key, x);

	update_orders_input();
	update_orders_button();
	c();
}

function update_orders_input()
{
	var orders = cart_get_orders();
	$('#orders_input').val(orders);
}

function update_orders_button() 
{
	var text = 'Корзина (' + total_elements() + ')';
	$('#orders_button').val(text);	
}

function total_elements()
{
	var total = 0
	for (var i = 0; i < localStorage.length; i++)
	{
    	var x = localStorage.getItem(localStorage.key(i));
    	total = x * 1 + total;
	}
	return(total);
}

function cart_get_orders()
{
	var total = ''

	for (var i = 0; i < localStorage.length; i++)
	{
		var key = window.localStorage.key(i);
		var value = window.localStorage.getItem(key);

		if (key.indexOf('product_') == 0)
		{
			total = total + key + '=' + value*1 + ',';

		}	
	}
	return total
}


function c()
{
	var x = cart_get_orders();
	$('#i').val(x);
	
}










