$('.hidden').toggle()

$(document).ready( function() {
  const $cards = $('.col')
  $cards.on('click', function() {
    $(this).children('.hidden').toggle()
  })

  $('#submit').on('click', () => {
    const $hint = $('#hint')
    const $answer = $('#answer')
    $('#flashcards').append(
      `<div class='col s3 card'>
        <p>${$hint.val()}</p>
        <h5 class='hidden'>${$answer.val()}</h5>
      </div>
      <div class='col s1'></div>`
    )
    $hint.val('')
    $answer.val('')
  })
})
