import data from "../../src/Data.js";

describe("pizza sayfası temel seviye testler", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
    cy.contains("ACIKTIM").click();
  });

  it("isim ve not metni yazan test", () => {
    cy.get('[data-cy="client-name"] input').type("Tarık");
    cy.get('[data-cy="client-name"] input').should("have.value", "Tarık");

    cy.get('[data-cy="note"] textarea').type("Not ekledim");
    cy.get('[data-cy="note"] textarea').should("have.value", "Not ekledim");
  });

  it("birden fazla malzeme seçen test", () => {
    cy.get('[data-cy="additional-ingredients"] input[type="checkbox"]').check([
      "Pepperoni",
      "Tavuk Izgara",
      "Mısır",
      "Roka",
    ]);
    cy.get('[data-cy="additional-ingredients"] input[type="checkbox"]').should(
      "be.checked",
    );
  });

  it("formu başarıyla tamamlayan bir test", () => {
    cy.get('[data-cy="size"] input[value="L"]').click();
    cy.get('[data-cy="dough"] select').select("Standart");
    cy.get('[data-cy="additional-ingredients"] input[type="checkbox"]').check([
      "Pepperoni",
      "Tavuk Izgara",
      "Mısır",
      "Sosis",
    ]);
    cy.get('[data-cy="client-name"] input').type("Tarık");
    cy.contains(data.products[1].price).should("be.visible");

    cy.get('[data-cy="submit-button"]').click();
    cy.contains(data.products[1].name).should("be.visible");
  });
});

describe("form doğrulama ve sınır testleri", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
    cy.contains("ACIKTIM").click();
  });

  it("sayfa ilk yüklendiğinde form geçersizdir", () => {
    cy.get('[data-cy="submit-button"]').should("be.disabled");
    cy.contains(
      "Lütfen sipariş formundaki tüm zorunlu alanları doldurduğunuzdan emin olunuz!",
    ).should("be.visible");
  });

  it("sadece boyut ve hamur seçiliyken buton disabled kalır", () => {
    cy.get('[data-cy="size"] input[value="L"]').click();
    cy.get('[data-cy="dough"] select').select("Standart");

    cy.get('[data-cy="submit-button"]').should("be.disabled");
  });

  it("müşteri adı en az 3 karakter olmalıdır", () => {
    cy.get('[data-cy="size"] input[value="L"]').click();
    cy.get('[data-cy="dough"] select').select("Standart");
    cy.get('[data-cy="additional-ingredients"] input[type="checkbox"]').check([
      "Pepperoni",
      "Tavuk Izgara",
      "Mısır",
      "Sosis",
    ]);

    cy.get('[data-cy="client-name"] input').type("Ta");
    cy.get('[data-cy="submit-button"]').should("be.disabled");

    cy.get('[data-cy="client-name"] input').type("r");
    cy.get('[data-cy="submit-button"]').should("not.be.disabled");
  });

  it("en az 4 malzeme seçilmelidir", () => {
    cy.get('[data-cy="size"] input[value="L"]').click();
    cy.get('[data-cy="dough"] select').select("Standart");
    cy.get('[data-cy="client-name"] input').type("Tarık");

    cy.get('[data-cy="additional-ingredients"] input[type="checkbox"]').check([
      "Pepperoni",
      "Tavuk Izgara",
      "Mısır",
    ]);
    cy.get('[data-cy="submit-button"]').should("be.disabled");

    cy.get('[data-cy="additional-ingredients"] input[type="checkbox"]').check([
      "Sosis",
    ]);
    cy.get('[data-cy="submit-button"]').should("not.be.disabled");
  });

  it("en fazla 10 malzeme seçilebilir", () => {
    cy.get('[data-cy="size"] input[value="L"]').click();
    cy.get('[data-cy="dough"] select').select("Standart");
    cy.get('[data-cy="client-name"] input').type("Tarık");

    cy.get('[data-cy="additional-ingredients"] input[type="checkbox"]').check([
      "Pepperoni",
      "Tavuk Izgara",
      "Mısır",
      "Sarımsak",
      "Ananas",
      "Sosis",
      "Soğan",
      "Sucuk",
      "Biber",
      "Kabak",
    ]);
    cy.get('[data-cy="submit-button"]').should("not.be.disabled");

    cy.get('[data-cy="additional-ingredients"] input[type="checkbox"]').check([
      "Kanada Jambonu",
    ]);
    cy.get('[data-cy="submit-button"]').should("be.disabled");
  });
});

describe("miktar sayaç testleri", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
    cy.contains("ACIKTIM").click();
  });

  it("varsayılan miktar 1 ve azalt butonu disabled'dır", () => {
    cy.get('[aria-label="Miktari azalt"]').next().should("have.text", "1");
    cy.get('[aria-label="Miktari azalt"]').should("be.disabled");
  });

  it("arttır tıklanınca miktar artar ve azalt aktifleşir", () => {
    cy.get('[aria-label="Miktari arttır"]').click();

    cy.get('[aria-label="Miktari azalt"]').next().should("have.text", "2");
    cy.get('[aria-label="Miktari azalt"]').should("not.be.disabled");
  });

  it("miktar 10'a ulaşınca arttır butonu disabled olur", () => {
    for (let i = 0; i < 9; i++) {
      cy.get('[aria-label="Miktari arttır"]').click();
    }

    cy.get('[aria-label="Miktari azalt"]').next().should("have.text", "10");
    cy.get('[aria-label="Miktari arttır"]').should("be.disabled");
  });

  it("miktar 1'in altına inmez", () => {
    cy.get('[aria-label="Miktari arttır"]').click();
    cy.get('[aria-label="Miktari azalt"]').click();

    cy.get('[aria-label="Miktari azalt"]').next().should("have.text", "1");
    cy.get('[aria-label="Miktari azalt"]').should("be.disabled");
  });
});

describe("fiyat hesaplama testleri", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
    cy.contains("ACIKTIM").click();
  });

  it("4 malzeme seçiliyken Seçimler ve Toplam doğru hesaplanır", () => {
    cy.get('[data-cy="additional-ingredients"] input[type="checkbox"]').check([
      "Pepperoni",
      "Tavuk Izgara",
      "Mısır",
      "Sosis",
    ]);

    cy.get('[data-cy="products-check"]').contains("20₺").should("be.visible");
    cy.get('[data-cy="products-check"]')
      .contains("105.5₺")
      .should("be.visible");
  });

  it("5. malzeme eklenince fiyatlar canlı güncellenir", () => {
    cy.get('[data-cy="additional-ingredients"] input[type="checkbox"]').check([
      "Pepperoni",
      "Tavuk Izgara",
      "Mısır",
      "Sosis",
      "Roka",
    ]);

    cy.get('[data-cy="products-check"]').contains("25₺").should("be.visible");
    cy.get('[data-cy="products-check"]')
      .contains("110.5₺")
      .should("be.visible");
  });

  it("miktar artınca toplam fiyat miktarla çarpılır", () => {
    cy.get('[data-cy="additional-ingredients"] input[type="checkbox"]').check([
      "Pepperoni",
      "Tavuk Izgara",
      "Mısır",
      "Sosis",
    ]);
    cy.get('[aria-label="Miktari arttır"]').click();

    cy.get('[data-cy="products-check"]').contains("40₺").should("be.visible");
    cy.get('[data-cy="products-check"]').contains("211₺").should("be.visible");
  });
});

describe("tam sipariş akışı: order -> checkout -> success", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
    cy.contains("ACIKTIM").click();
  });

  it("geçerli bir sipariş order, checkout ve success adımlarında doğru gösterilir", () => {
    cy.get('[data-cy="size"] input[value="M"]').click();
    cy.get('[data-cy="dough"] select').select("İnce");
    cy.get('[data-cy="additional-ingredients"] input[type="checkbox"]').check([
      "Pepperoni",
      "Tavuk Izgara",
      "Mısır",
      "Sosis",
      "Roka",
    ]);
    cy.get('[data-cy="client-name"] input').type("Ayşe Yılmaz");
    cy.get('[data-cy="note"] textarea').type("Kapıda bekletmeyin");

    cy.get('[aria-label="Miktari arttır"]').click();
    cy.get('[aria-label="Miktari arttır"]').click();

    cy.get('[data-cy="submit-button"]').click();

    cy.url().should("include", "/checkout");
    cy.get('[data-cy="orderInfo"]').should("contain", data.products[1].name);
    cy.get('[data-cy="orderDetails"]').should("contain", "M");
    cy.get('[data-cy="orderDetails"]').should("contain", "İnce");
    cy.get('[data-cy="orderDetails"]')
      .should("contain", "Pepperoni")
      .and("contain", "Roka");
    cy.get('[data-cy="orderDetails"]').should("contain", "AYŞE YILMAZ");
    cy.get('[data-cy="orderDetails"]').should("contain", "Kapıda bekletmeyin");
    cy.get('[data-cy="sum"]').should("contain", "331.5₺");

    cy.contains("Ödemeyi Tamamla").click();

    cy.url().should("include", "/success");
    cy.get('[data-cy="success-title"]').should("contain", "SİPARİŞ ALINDI!");
    cy.get('[data-cy="orderDetails"]').should("contain", "AYŞE YILMAZ");
    cy.get('[data-cy="sum"]').should("contain", "331.5₺");
  });

  it('checkout sayfasında "Düzenle" formu geri getirir', () => {
    cy.get('[data-cy="size"] input[value="S"]').click();
    cy.get('[data-cy="dough"] select').select("Kalın");
    cy.get('[data-cy="additional-ingredients"] input[type="checkbox"]').check([
      "Pepperoni",
      "Tavuk Izgara",
      "Mısır",
      "Sosis",
    ]);
    cy.get('[data-cy="client-name"] input').type("Tarık");

    cy.get('[data-cy="submit-button"]').click();
    cy.url().should("include", "/checkout");

    cy.contains("Düzenle").click();

    cy.url().should("include", "/order");
    cy.get('[data-cy="submit-button"]').should("exist");
  });
});

describe("hata senaryosu", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
    cy.contains("ACIKTIM").click();
  });

  it("POST başarısız olursa checkout sayfasında hata ekranı gösterilir", () => {
    cy.intercept("POST", "https://reqres.in/api/pizza", {
      statusCode: 500,
      body: {},
    }).as("pizzaFail");

    cy.get('[data-cy="size"] input[value="L"]').click();
    cy.get('[data-cy="dough"] select').select("Standart");
    cy.get('[data-cy="additional-ingredients"] input[type="checkbox"]').check([
      "Pepperoni",
      "Tavuk Izgara",
      "Mısır",
      "Sosis",
    ]);
    cy.get('[data-cy="client-name"] input').type("Tarık");

    cy.get('[data-cy="submit-button"]').click();

    cy.wait("@pizzaFail");
    cy.url().should("include", "/checkout");
    cy.contains("Hata! Lütfen tekrar deneyiniz.").should("be.visible");
    cy.get('[data-cy="orderDetails"]').should("not.exist");
  });
});
