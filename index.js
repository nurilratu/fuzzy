var pasien = {
    kategoriTinggi: {},
    kategoriBerat: {},
    kategoriSehat: {}
}

var kategoriSehat = [{
    keterangan: 'sangat sehat',
    simbol: 'SS',
    index: 0.8
}, {
    keterangan: 'sehat',
    simbol: 'S',
    index: 0.6
}, {
    keterangan: 'agak sehat',
    simbol: 'AS',
    index: 0.4
}, {
    keterangan: 'tidak sehat',
    simbol: 'TS',
    index: 0.2
}];

var aturan = [{
    berat: 'sangat kurus',
    tinggi: 'sangat pendek',
    kategoriSehat: kategoriSehat[0]
}, {
    berat: 'kurus',
    tinggi: 'sangat pendek',
    kategoriSehat: kategoriSehat[1]
}, {
    berat: 'biasa',
    tinggi: 'sangat pendek',
    kategoriSehat: kategoriSehat[2]
}, {
    berat: 'berat',
    tinggi: 'sangat pendek',
    kategoriSehat: kategoriSehat[3]
}, {
    berat: 'sangat berat',
    tinggi: 'sangat pendek',
    kategoriSehat: kategoriSehat[3]
}, {
    berat: 'sangat kurus',
    tinggi: 'pendek',
    kategoriSehat: kategoriSehat[1]
}, {
    berat: 'kurus',
    tinggi: 'pendek',
    kategoriSehat: kategoriSehat[0]
}, {
    berat: 'biasa',
    tinggi: 'pendel',
    kategoriSehat: kategoriSehat[1]
}, {
    berat: 'berat',
    tinggi: 'pendek',
    kategoriSehat: kategoriSehat[2]
}, {
    berat: 'sangat berat',
    tinggi: 'pendek',
    kategoriSehat: kategoriSehat[3]
}, {
    berat: 'sangat kurus',
    tinggi: 'sedang',
    kategoriSehat: kategoriSehat[2]
}, {
    berat: 'kurus',
    tinggi: 'sedang',
    kategoriSehat: kategoriSehat[0]
}, {
    berat: 'biasa',
    tinggi: 'sedang',
    kategoriSehat: kategoriSehat[0]
}, {
    berat: 'berat',
    tinggi: 'sedang',
    kategoriSehat: kategoriSehat[2]
}, {
    berat: 'sangat berat',
    tinggi: 'sedang',
    kategoriSehat: kategoriSehat[3]
}, {
    berat: 'sangat kurus',
    tinggi: 'tinggi',
    kategoriSehat: kategoriSehat[3]
}, {
    berat: 'kurus',
    tinggi: 'tinggi',
    kategoriSehat: kategoriSehat[1]
}, {
    berat: 'biasa',
    tinggi: 'tinggi',
    kategoriSehat: kategoriSehat[0]
}, {
    berat: 'berat',
    tinggi: 'tinggi',
    kategoriSehat: kategoriSehat[0]
}, {
    berat: 'sangat berat',
    tinggi: 'tinggi',
    kategoriSehat: kategoriSehat[3]
}, {
    berat: 'sangat kurus',
    tinggi: 'sangat tinggi',
    kategoriSehat: kategoriSehat[3]
}, {
    berat: 'kurus',
    tinggi: 'sangat tinggi',
    kategoriSehat: kategoriSehat[2]
}, {
    berat: 'biasa',
    tinggi: 'sangat tinggi',
    kategoriSehat: kategoriSehat[0]
}, {
    berat: 'berat',
    tinggi: 'sangat tinggi',
    kategoriSehat: kategoriSehat[1]
}, {
    berat: 'sangat berat',
    tinggi: 'sangat tinggi',
    kategoriSehat: kategoriSehat[2]
}];

var kategoriTinggi = [{
    nama: 'sangat pendek', 
    min: 0,
    max: 115
}, {
    nama: 'pendek',
    min: 120,
    max: 140,
}, {
    nama: 'sedang',
    min: 145,
    max: 160,
}, {
    nama: 'tinggi',
    min: 165,
    max: 180,
}, {
    nama: 'sangat tinggi',
    min: 185,
    max: Infinity,
}];

var kategoriBerat = [{
    nama: 'sangat kurus',
    min: 0,
    max: 40
}, {
    nama: 'kurus',
    min: 45,
    max: 50,
}, {
    nama: 'biasa',
    min: 55,
    max: 60,
}, {
    nama: 'berat',
    min: 65,
    max: 80,
}, {
    nama: 'sangat berat',
    min: 85,
    max: Infinity,
}];

function cariKategoriTinggi(input) {
    kategoriTinggi.forEach(function(v, i) {
        if ((input >= v.min) && (input <= v.max)) {
            pasien.kategoriTinggi = v;                
        }
    });
}

//KATEGORI TINGGI
//sangat pendek
if(input > kategoriTinggi[0].min && input < kategoriTinggi[0].max){
    return 1
}else if(input > kategoriTinggi[0].max && input < kategoriTinggi[1].min){
    return ((input - kategoriTinggi[0].min) / (kategoriTinggi[1].min - kategoriTinggi[0].max));
}else{
    return 0;
};

// pendek
if(input > kategoriTinggi[1].min && input < kategoriTinggi[1].max){
    return 1
}else if(input > kategoriTinggi[1].max && input < kategoriTinggi[2].min){
    return ((input - kategoriTinggi[1].min) / (kategoriTinggi[2].min - kategoriTinggi[1].max));
}else{
    return 0;
};

//sedang
if(input > kategoriTinggi[2].min && input < kategoriTinggi[2].max){
    return 1
}else if(input > kategoriTinggi[2].max && input < kategoriTinggi[3].min){
    return ((input - kategoriTinggi[2].min) / (kategoriTinggi[3].min - kategoriTinggi[2].max));
}else if(input > kategoriTinggi[1].max && input < kategoriTinggi[2].min){
    return(())    
}else{
    return 0;
};

//tinggi
if(input > kategoriTinggi[3].min && input < kategoriTinggi[3].max){
    return 1
}else if(input > kategoriTinggi[3].max && input < kategoriTinggi[1].min){
    return ((input - kategoriTinggi[3].min) / (kategoriTinggi[1].min - kategoriTinggi[0].max));
}else{
    return 0;
};


