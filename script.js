let narsalar = ['olma', 'Gilos', 'Shaftoli', 'Banan']

alert(`Boshlashida Arryning uzunligi: ${narsalar.length}`)

let confirmation = confirm('sizning arayingizdan malumotlarni olib tashlamoqchimiz')


if (confirmation == true) {
    narsalar.pop();
    alert(narsalar);
} else {
    alert('Последний элемент не удалён');
    alert(narsalar);
}