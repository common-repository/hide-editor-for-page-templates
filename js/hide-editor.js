(function($){
    $(document).ready(function(){
        let options = {
            placeholder: 'Select a template',
            multiple: true,
            width: '100%',
            allowClear: true,
        }
        $('.page-templates').select2(options);
    });
}(jQuery));