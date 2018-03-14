class Gishatich extends Kendanieak {
    constructor(x, y) {
        super(x, y);
        this.directions = [];
        this.index = 4;
        this.energy = 5;
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
        var norVandak = random(this.yntrelVandak(0));
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            this.x = norVandak[0];
            this.y = norVandak[1];
            matrix[this.y][this.x] = 4;
            this.energy--;
            this.mahanal();
        }
        else if (norVandak) {
            matrix[this.y][this.x] = 1;
            this.x = norVandak[0];
            this.y = norVandak[1];
            matrix[this.y][this.x] = 4;
            this.energy--;
            this.mahanal();
        }
        else if (norVandak) {
            matrix[this.y][this.x] = 2;
            this.x = norVandak[0];
            this.y = norVandak[1];
            matrix[this.y][this.x] = 4;
            this.energy--;
            this.mahanal();
        }

    }

    utel() {
        this.stanalNorKordinatner();
        var norVandak = random(this.yntrelVandak(2));
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            this.x = norVandak[0];
            this.y = norVandak[1];
            matrix[this.y][this.x] = 4;
            this.energy++;
            this.bazmanal();
            for (var i in xotakerArr) {
                if (this.x == xotakerArr[i].x && this.y == xotakerArr[i].y) {
                    xotakerArr.splice(i, 1);
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
            var norgishatich = new Gishatich(this.x, this.y);
            gishatichArr.push(norgishatich);
            this.energy = 5;
        }
    }




    mahanal() {
        if (this.energy == 0) {
            for (var i in gishatichArr) {
                if (this.x == gishatichArr[i].x && this.y == gishatichArr[i].y) {
                    gishatichArr.splice(i, 1);
                    matrix[this.y][this.x] = 0;

                }

            }
        }
    }

}

