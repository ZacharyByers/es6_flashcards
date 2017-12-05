$('.hidden').toggle()

$(document).ready( function() {

  $(document).on('click', '.col', function() {
    $(this).children('.hidden').toggle()
  })

  $('#submit').on('click', () => {
    const $hint = $('#hint')
    const $answer = $('#answer')
    $('#flashcards').append(
      `<div class='col s3 card blue'>
        <p>${$hint.val()}</p>
        <h5 class='hidden'>${$answer.val()}</h5>
        <div class='btn delete'>Delete</div>
      </div>
      <div class='col s1'></div>`
    )
    $hint.val('')
    $answer.val('')
    Materialize.toast('Card Added', 3000)
  })

  $(document).on('click', '.delete', function() {
    $(this).parent().next().remove()
    $(this).parent().remove()
    Materialize.toast('Card Removed', 3000)
  })
})
