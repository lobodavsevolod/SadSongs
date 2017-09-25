/**
 * Created by User on 24.09.2017.
 */

function QuoteMaseter(textId, authorId, sourceId ) {

    this.quotes = getQuoteArray();

    this.setQuote = function () {

        var self = this;

        $(function () {

            var rnd = getRandomValue(0, self.quotes.length);

             $("#" + textId).html('<i>' + self.quotes[rnd].text + '</i>');
             $("#" + authorId).html(self.quotes[rnd].author);
             $("#" + sourceId).html(self.quotes[rnd].source);

            }
        )
    }
}

function Quote(text, author, source) {

    this.text = text;
    this.author = author;
    this.source = source;
}

function getQuoteArray() {

    return [

        new Quote("На расстоянии в дым играет Наутилус," +
                   "шмонай мою голову, как ты научилась " +
                   "там тлько страх и стыд, а кроме — пустяки " +
                   "маленькие люди и огромные стихи", "Хаски", "Бит шатает голову"),

        new Quote("Я бы выбрал обоих, но обыгран своей же игрою " +
                  "умираю в эпицентре поля боя " +
                  "залитого спермой, слезами и кровью", "Олег ЛСП", "Напополам"),

        new Quote("Ей хотелось увидеть весь свет. "+
                    "А ведь её сны, были гораздо важнее,"+
                    " чем представления обычных людей"+
                    " о любви и других городах,"+
                    " потому что в их тусклых мечтах"+
                    " ничего интересного нет.", "Алексей Никонов", "Любовь это просто кусок пизды"),

        new Quote("Убегать, под пуховиком — тулово парное" +
                  " голова гудит, в голове гундит пуля-парано"+
                  " мимо матери, прямо в похмельный сон"+
                  " новое утро, панельный стон", "Хаски", "Панельки"),
    ];
}

function getRandomValue(min, max) {

    return Math.floor(Math.random() * (max - min) + min);
}