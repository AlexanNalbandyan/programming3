class Amenaker extends Kendanieak {
    constructor(x, y) {
        super(x, y);
        this.energy = 5;
        this.directions = [];
        this.index = 3;
    }

    yntrelVandak(ch) {
        return super.yntrelVandak(ch);
    }


    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }



    sharjvel() {
        this.stanalNorKordinatner();
        var datark = this.yntrelVandak(0);
        var norVandak = random(datark);
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            this.x = norVandak[0];
            this.y = norVandak[1];
            matrix[this.y][this.x] = 3;
            this.energy--;
            this.mahanal();
        }
         else if (norVandak) {
            matrix[this.y][this.x] = 1;
            this.x = norVandak[0];
            this.y = norVandak[1];
            matrix[this.y][this.x] = 3;
            this.energy--;
            this.mahanal();
        }
        else if (norVandak) {
            matrix[this.y][this.x] = 2;
            this.x = norVandak[0];
            this.y = norVandak[1];
            matrix[this.y][this.x] = 3;
            this.energy--;
            this.mahanal();
        }
        else if (norVandak) {
            matrix[this.y][this.x] = 4;
            this.x = norVandak[0];
            this.y = norVandak[1];
            matrix[this.y][this.x] = 3;
            this.energy--;
            this.mahanal();
        }
        
    }

        utel() {
        this.stanalNorKordinatner();
        var norVandak = random(this.yntrelVandak(1));
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            this.x = norVandak[0];
            this.y = norVandak[1];
            matrix[this.y][this.x] = 3;
            this.energy++;
            this.bazmanal();
            for (var i in grassArr) {
                if (this.x == grassArr[i].x && this.y == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }

            }

        }
        else if (norVandak) {
            matrix[this.y][this.x] = 1;
            this.x = norVandak[0];
            this.y = norVandak[1];
            matrix[this.y][this.x] = 3;
            this.energy++;
            this.bazmanal();
            for (var i in grassArr) {
                if (this.x == grassArr[i].x && this.y == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }

            }

        }
        else if (norVandak) {
            matrix[this.y][this.x] = 2;
            this.x = norVandak[0];
            this.y = norVandak[1];
            matrix[this.y][this.x] = 3;
            this.energy++;
            this.bazmanal();
            for (var i in xotakerArr) {
                if (this.x == xotakerArr[i].x && this.y == xotakerArr[i].y) {
                    xotakerArr.splice(i, 1);
                    break;
                }

            }

        }
        else if (norVandak) {
            matrix[this.y][this.x] = 4;
            this.x = norVandak[0];
            this.y = norVandak[1];
            matrix[this.y][this.x] = 3;
            this.energy++;
            this.bazmanal();
            for (var i in gishatichArr) {
                if (this.x == gishatichArr[i].x && this.y == gishatichArr[i].y) {
                    gishatichArr.splice(i, 1);
                    break;
                }

            }

        }
        else {
            this.sharjvel();
        }


    
    }



    bazmanal() {
        if (this.energy == 10) {
            var norAm = new Amenaker(this.x, this.y);
            amArr.push(norAm);
            this.energy = 5;
        }
    }



    mahanal() {
        if (this.energy == 0) {
            for (var i in amArr) {
                if (this.x == amArr[i].x && this.y == amArr[i].y) {
                    amArr.splice(i, 1);
                    matrix[this.y][this.x] = 0;
                    break;
                }

            }
        }
    }

}



