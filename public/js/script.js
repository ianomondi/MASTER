(document).ready(function () {
    /** Textarea**/
    ("#checkin").summernote();

    /**Date Picker**/
    ("#noticedate").datepicker();
    ("#vacationdate").datepicker();
    ("#expirydate").datepicker();
    ("#yearbuild").datepicker();



    document.getElementById('pro-image').addEventListener('change', readImage, false);

    (".preview-images-zone").sortable();

    (document).on('click', '.image-cancel', function () {
        let no = (this).data('no');
        (".preview-image.preview-show-" + no).remove();
    });
});



var num = 4;

