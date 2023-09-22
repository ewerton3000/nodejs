const Musica = {
    _musica1 :"Before I Forget",
    _album1:"The Subliminal Verses",
    _musica2: "IS MY LIFE",
    _album2: "Dourado",
    _musica3: "What i've Done",
    _album3: "Meteora",
    //Encapsulamento com get e set
    
    get musica1(){ return this._musica1} ,
    get album1(){return this._album1},
    get musica2(){return this._musica2},
    get album2(){return this._album2},
    get musica3(){return this._musica3},
    get album3(){return this._album3},
    set musica(musica1){
          this.musica = musica1
    },
    set album1(album1){
        this.album = album1
    },
    set musica2(musica2){
        this.musica2 = this.musica2
    },
    set album2(album2){
        this.album2 = this.album2
    },
    set musica3(musica3){
        this.musica3 = this.musica3
    },
    set album3(album3){
        this.album3 = album3
    }
}
console.log(Musica.musica1 , Musica.album1)
console.log(Musica.musica2 , Musica.album2)
console.log(Musica.musica3 , Musica.album3)


