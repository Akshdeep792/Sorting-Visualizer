
BubbleSort = async () => {
    var i, j;
    for (i = 0; i < n - 1; i++) {
        for (j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr[j], arr[j+1]);
                

            }
            arr[j].style.background="green";
        }


    }
}

function swap(el1, el2) {

    const style1 = window.getComputedStyle(el1);
    const style2 = window.getComputedStyle(el2);


    const transform1 = style1.getPropertyValue("height");
    const transform2 = style2.getPropertyValue("height");
    arr[j].style.background="red";
    arr[j+1].style.background="red";

    el1.style.height = transform2;
    el2.style.height = transform1;

}