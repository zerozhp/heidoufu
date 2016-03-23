module.exports = function (req,res,next){
	var cart = req.session.cart;
	if(!cart) return next();
	if(cart.some(function(item){ return item.product.requiresWaiver;})){
		if(!cart.warnings) cart.warnings = [];
		cart.warnings.push('One or more of your selected tours' + 'requires a waiver');
	}
	next();
};