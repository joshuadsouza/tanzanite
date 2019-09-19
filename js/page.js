$("a.scroll").on("click", function(e){
	e.preventDefault();
    var targetID = $(this).attr('href')
    var elementPosition = $(targetID).offset().top
    $('html,body').animate({scrollTop: elementPosition},'slow');
});

$('#formModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget);
    var link = button.data('link');
    var modal = $(this);
    modal.find('#modal-form-content').attr('src', link);
  })
