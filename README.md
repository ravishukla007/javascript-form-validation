# javascript-form-validation

This javascript library is totaly based on javascript no jquery. So you do not want worry about confilct.

Uses

Simply add class to input field and then create new validation object for a form.

For example
--------------------

<form name="form2" id="form2" class="rs-form">
	<div class=" test ">
		<input type="text" name="name" value="" class="">
	</div>
	<div class=" test ">
		<input type="text" name="age"  value="" class="required numeric minlength-3 rs-me-head" >
	</div>
	<div class="">
		<input type="text" name="email"  value="" class="required valid-email">
	</div>
	<input type="submit" name="age">
</form>

And Then create validation object.
<script>
var validate = new Validate({
	"FormName" : 'form2',
	"ErrorLevel" : 0,
});

</script>


