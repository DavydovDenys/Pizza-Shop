function add_to_cart(id)
{	
	var key = 'product_' + id;

	var x = window.localStorage.getItem(key);
	x = x * 1 + 1;
	window.localStorage.setItem(key, x);

	update_orders_input();
}

function update_orders_input()
{
	var orders = cart_get_orders();
	$('#orders_input').val(orders);
}

function total_elements()
{
	var total = 0
	for (var i = 0; i < localStorage.length; i++)
	{
    	var x = localStorage.getItem(localStorage.key(i));
    	total = x * 1 + total;
	}
	return('Total products:' + total);
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
