module.exports = function(){

  const progress = $('.progress-bar-green'),
        counter = $('.dollar-counter'),
        modalBtn = $('.modal-btn');

  const runProgress = () => {
    let dollar = 0,
        progressInterval = setInterval(() => {
          if (dollar >= 56) {
            clearInterval(progressInterval);
          } else {
            dollar++;
            progress.width(`${dollar}%`);
            counter.text(`$${dollar * 1}`);
          }
        }, 10);
  }

  modalBtn.click(() => {
    progress.width('0%');
    counter.text('$0');
    setTimeout(runProgress, 1000);
  });

}
