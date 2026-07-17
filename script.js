(function () {
  "use strict";

  const LANGUAGE_KEY = "alloy-language";

  const translations = {
    en: {
      "skip": "Skip to main content",
      "menu.open": "Open navigation menu",
      "menu.close": "Close navigation menu",
      "nav.home": "Home",
      "nav.about": "About",
      "nav.services": "Services",
      "nav.process": "How It Works",
      "nav.safety": "Safety",
      "nav.contact": "Contact",
      "nav.privacy": "Privacy Policy",
      "nav.terms": "Terms of Service",
      "hero.eyebrow": "Creator agency for Türkiye",
      "hero.title": "Grow Your TikTok LIVE Journey with Alloy",
      "hero.subtitle": "Alloy supports creators in Türkiye with onboarding, LIVE operations guidance, account support, performance insights, and long-term creator growth services.",
      "hero.contact": "Contact Alloy",
      "hero.services": "Learn About Our Services",
      "hero.point1": "Official onboarding is completed through TikTok systems.",
      "hero.point2": "Creator passwords and verification codes are never requested.",
      "hero.point3": "Support is handled with clear human review.",
      "about.eyebrow": "About Alloy",
      "about.title": "Creator support with a steady operating rhythm",
      "about.p1": "Alloy is a creator-focused TikTok LIVE agency serving the Türkiye market. Our goal is to help creators build healthier, more consistent, and more sustainable LIVE operations.",
      "about.p2": "We combine creator onboarding, performance analysis, policy guidance, campaign support, and human operations assistance to help creators better understand and improve their LIVE activity.",
      "services.eyebrow": "Services",
      "services.title": "Support across the creator lifecycle",
      "services.note": "Alloy provides practical guidance and operational support without promising traffic, earnings, followers, or specific account outcomes.",
      "services.s1.title": "Creator Recruitment and Onboarding",
      "services.s1.body": "Helping eligible creators understand the agency process and complete official onboarding steps.",
      "services.s2.title": "TikTok LIVE Operations Support",
      "services.s2.body": "Providing guidance on LIVE planning, consistency, audience engagement, and operational improvement.",
      "services.s3.title": "Account and Policy Guidance",
      "services.s3.body": "Helping creators understand platform notifications, LIVE restrictions, appeal processes, and relevant policy requirements.",
      "services.s4.title": "Performance Analysis",
      "services.s4.body": "Reviewing LIVE activity, engagement patterns, and operational performance to identify improvement opportunities.",
      "services.s5.title": "Campaign and Event Support",
      "services.s5.body": "Helping creators understand relevant TikTok LIVE activities, agency campaigns, and participation requirements.",
      "services.s6.title": "Business Messaging and Customer Support",
      "services.s6.body": "Providing timely responses to creator inquiries and transferring complex cases to human operators.",
      "process.eyebrow": "How It Works",
      "process.title": "A clear agency support process",
      "process.step1.label": "Step 1",
      "process.step1.body": "Creator contacts Alloy or receives an official invitation.",
      "process.step2.label": "Step 2",
      "process.step2.body": "Alloy reviews the creator’s LIVE activity and eligibility.",
      "process.step3.label": "Step 3",
      "process.step3.body": "The creator completes the official onboarding process through TikTok.",
      "process.step4.label": "Step 4",
      "process.step4.body": "Alloy provides ongoing operational guidance and support.",
      "process.notice": "All official agency invitations and onboarding steps are completed through TikTok’s official systems. Alloy does not request creator account passwords.",
      "safety.eyebrow": "Safety and Trust",
      "safety.title": "Clear boundaries for creator protection",
      "safety.intro": "Alloy keeps creator support transparent, practical, and aligned with official platform processes.",
      "safety.p1": "Alloy does not ask creators for TikTok passwords.",
      "safety.p2": "Alloy does not charge creators for standard agency support.",
      "safety.p3": "Official invitations are completed through TikTok’s official agency system.",
      "safety.p4": "Alloy does not guarantee traffic, earnings, account recovery, or appeal outcomes.",
      "safety.p5": "Complex account or policy issues are reviewed by human team members.",
      "safety.p6": "Personal information is handled according to the Privacy Policy.",
      "contact.eyebrow": "Contact",
      "contact.title": "Get in touch with Alloy",
      "contact.intro": "Creators, partners, and developer reviewers can reach Alloy through the official company email below.",
      "contact.company": "Company",
      "contact.brand": "Brand",
      "contact.market": "Market",
      "contact.email": "Email",
      "contact.website": "Website",
      "form.name": "Name",
      "form.email": "Email",
      "form.username": "TikTok Username",
      "form.inquiry": "Inquiry Type",
      "form.option.application": "Agency Application",
      "form.option.support": "Creator Support",
      "form.option.policy": "Account or Policy Question",
      "form.option.business": "Business Cooperation",
      "form.option.api": "Developer or API Inquiry",
      "form.option.other": "Other",
      "form.message": "Message",
      "form.security": "For security reasons, please do not send passwords, verification codes, payment details, or sensitive identification documents through this form.",
      "form.submit": "Open Email App",
      "form.status": "Your email application should open with the inquiry details. Please review the message before sending.",
      "footer.disclaimer": "Alloy is an independent creator agency. TikTok is a trademark of its respective owner. References to TikTok describe the platform on which our creator support services operate.",
      "footer.contact": "Contact",
      "footer.links": "Links",
      "legal.policy.eyebrow": "Privacy Policy",
      "legal.policy.title": "Privacy Policy",
      "legal.policy.lede": "This policy explains how ALLOY NETWORK LTD handles information submitted through the Alloy website and related creator support communications.",
      "legal.terms.eyebrow": "Terms of Service",
      "legal.terms.title": "Terms of Service",
      "legal.terms.lede": "These terms explain the rules for using Alloy’s website and creator support services.",
      "error.eyebrow": "Page not found",
      "error.title": "This page is not available",
      "error.body": "The link may be incorrect or the page may have moved. You can return to the home page or contact Alloy directly.",
      "error.home": "Go to Home",
      "error.contact": "Contact Alloy"
    },
    tr: {
      "skip": "Ana içeriğe geç",
      "menu.open": "Gezinme menüsünü aç",
      "menu.close": "Gezinme menüsünü kapat",
      "nav.home": "Ana Sayfa",
      "nav.about": "Hakkımızda",
      "nav.services": "Hizmetler",
      "nav.process": "Süreç",
      "nav.safety": "Güvenlik",
      "nav.contact": "İletişim",
      "nav.privacy": "Gizlilik Politikası",
      "nav.terms": "Kullanım Şartları",
      "hero.eyebrow": "Türkiye için içerik üretici ajansı",
      "hero.title": "TikTok LIVE Yolculuğunuzu Alloy ile Büyütün",
      "hero.subtitle": "Alloy, Türkiye’deki içerik üreticilerine ajansa katılım, LIVE operasyon desteği, hesap rehberliği, performans analizi ve uzun vadeli büyüme konusunda destek sağlar.",
      "hero.contact": "Alloy ile İletişime Geç",
      "hero.services": "Hizmetlerimizi İnceleyin",
      "hero.point1": "Resmi ajans katılımı TikTok sistemleri üzerinden tamamlanır.",
      "hero.point2": "İçerik üreticilerinden şifre veya doğrulama kodu istenmez.",
      "hero.point3": "Destek süreçleri insan incelemesiyle yürütülür.",
      "about.eyebrow": "Alloy Hakkında",
      "about.title": "Düzenli operasyon ritmiyle içerik üretici desteği",
      "about.p1": "Alloy, Türkiye pazarına hizmet veren, içerik üretici odaklı bir TikTok LIVE ajansıdır. Amacımız, içerik üreticilerinin daha sağlıklı, daha tutarlı ve daha sürdürülebilir LIVE operasyonları kurmasına yardımcı olmaktır.",
      "about.p2": "İçerik üretici katılımı, performans analizi, politika rehberliği, kampanya desteği ve insan odaklı operasyon yardımıyla üreticilerin LIVE faaliyetlerini daha iyi anlamasına ve geliştirmesine destek oluruz.",
      "services.eyebrow": "Hizmetler",
      "services.title": "İçerik üretici yolculuğunun farklı aşamalarında destek",
      "services.note": "Alloy, trafik, gelir, takipçi veya belirli hesap sonuçları sözü vermeden pratik rehberlik ve operasyon desteği sağlar.",
      "services.s1.title": "İçerik Üretici Kazanımı ve Katılım",
      "services.s1.body": "Uygun içerik üreticilerinin ajans sürecini anlamasına ve resmi katılım adımlarını tamamlamasına yardımcı oluruz.",
      "services.s2.title": "TikTok LIVE Operasyon Desteği",
      "services.s2.body": "LIVE planlama, düzenlilik, izleyici etkileşimi ve operasyonel gelişim konularında rehberlik sağlarız.",
      "services.s3.title": "Hesap ve Politika Rehberliği",
      "services.s3.body": "Üreticilerin platform bildirimlerini, LIVE kısıtlamalarını, itiraz süreçlerini ve ilgili politika gerekliliklerini anlamasına yardımcı oluruz.",
      "services.s4.title": "Performans Analizi",
      "services.s4.body": "Gelişim fırsatlarını belirlemek için LIVE faaliyetlerini, etkileşim örüntülerini ve operasyonel performansı inceleriz.",
      "services.s5.title": "Kampanya ve Etkinlik Desteği",
      "services.s5.body": "İçerik üreticilerinin ilgili TikTok LIVE etkinliklerini, ajans kampanyalarını ve katılım gerekliliklerini anlamasına destek oluruz.",
      "services.s6.title": "Business Messaging ve Müşteri Desteği",
      "services.s6.body": "İçerik üretici taleplerine zamanında yanıt verir ve karmaşık durumları insan operatörlere aktarırız.",
      "process.eyebrow": "Süreç",
      "process.title": "Net bir ajans destek süreci",
      "process.step1.label": "Adım 1",
      "process.step1.body": "İçerik üretici Alloy ile iletişime geçer veya resmi bir davet alır.",
      "process.step2.label": "Adım 2",
      "process.step2.body": "Alloy, üreticinin LIVE faaliyetini ve uygunluğunu inceler.",
      "process.step3.label": "Adım 3",
      "process.step3.body": "İçerik üretici, resmi katılım sürecini TikTok üzerinden tamamlar.",
      "process.step4.label": "Adım 4",
      "process.step4.body": "Alloy, sürekli operasyon rehberliği ve destek sağlar.",
      "process.notice": "Tüm resmi ajans davetleri ve katılım adımları TikTok’un resmi sistemleri üzerinden tamamlanır. Alloy, içerik üreticilerinden hesap şifresi istemez.",
      "safety.eyebrow": "Güvenlik ve Güven",
      "safety.title": "İçerik üreticileri koruyan net sınırlar",
      "safety.intro": "Alloy, içerik üretici desteğini şeffaf, pratik ve resmi platform süreçleriyle uyumlu şekilde yürütür.",
      "safety.p1": "Alloy, içerik üreticilerinden TikTok şifresi istemez.",
      "safety.p2": "Alloy, standart ajans desteği için içerik üreticilerinden ücret almaz.",
      "safety.p3": "Resmi davetler TikTok’un resmi ajans sistemi üzerinden tamamlanır.",
      "safety.p4": "Alloy; trafik, gelir, hesap kurtarma veya itiraz sonucu garantisi vermez.",
      "safety.p5": "Karmaşık hesap veya politika konuları ekip üyeleri tarafından incelenir.",
      "safety.p6": "Kişisel bilgiler Gizlilik Politikası’na göre işlenir.",
      "contact.eyebrow": "İletişim",
      "contact.title": "Alloy ile iletişime geçin",
      "contact.intro": "İçerik üreticiler, iş ortakları ve geliştirici inceleme ekipleri Alloy’a aşağıdaki resmi şirket e-postasından ulaşabilir.",
      "contact.company": "Şirket",
      "contact.brand": "Marka",
      "contact.market": "Pazar",
      "contact.email": "E-posta",
      "contact.website": "Web sitesi",
      "form.name": "Ad Soyad",
      "form.email": "E-posta",
      "form.username": "TikTok Kullanıcı Adı",
      "form.inquiry": "Talep Türü",
      "form.option.application": "Ajans Başvurusu",
      "form.option.support": "İçerik Üretici Desteği",
      "form.option.policy": "Hesap veya Politika Sorusu",
      "form.option.business": "İş Birliği",
      "form.option.api": "Geliştirici veya API Talebi",
      "form.option.other": "Diğer",
      "form.message": "Mesaj",
      "form.security": "Güvenlik nedeniyle lütfen bu form üzerinden şifre, doğrulama kodu, ödeme bilgisi veya hassas kimlik belgesi göndermeyin.",
      "form.submit": "E-posta Uygulamasını Aç",
      "form.status": "E-posta uygulamanız talep bilgileriyle açılmalıdır. Göndermeden önce mesajı kontrol edin.",
      "footer.disclaimer": "Alloy bağımsız bir içerik üretici ajansıdır. TikTok, ilgili sahibinin ticari markasıdır. TikTok’a yapılan atıflar, içerik üretici destek hizmetlerimizin faaliyet gösterdiği platformu tanımlamak içindir.",
      "footer.contact": "İletişim",
      "footer.links": "Bağlantılar",
      "legal.policy.eyebrow": "Gizlilik Politikası",
      "legal.policy.title": "Gizlilik Politikası",
      "legal.policy.lede": "Bu politika, ALLOY NETWORK LTD’nin Alloy web sitesi ve ilgili içerik üretici destek iletişimleri üzerinden sağlanan bilgileri nasıl işlediğini açıklar.",
      "legal.terms.eyebrow": "Kullanım Şartları",
      "legal.terms.title": "Kullanım Şartları",
      "legal.terms.lede": "Bu şartlar, Alloy web sitesinin ve içerik üretici destek hizmetlerinin kullanım kurallarını açıklar.",
      "error.eyebrow": "Sayfa bulunamadı",
      "error.title": "Bu sayfa kullanılamıyor",
      "error.body": "Bağlantı hatalı olabilir veya sayfa taşınmış olabilir. Ana sayfaya dönebilir ya da Alloy ile doğrudan iletişime geçebilirsiniz.",
      "error.home": "Ana Sayfaya Git",
      "error.contact": "Alloy ile İletişime Geç"
    }
  };

  function readLanguage() {
    try {
      const saved = window.localStorage.getItem(LANGUAGE_KEY);
      return saved === "tr" ? "tr" : "en";
    } catch (error) {
      return "en";
    }
  }

  function saveLanguage(language) {
    try {
      window.localStorage.setItem(LANGUAGE_KEY, language);
    } catch (error) {
      // localStorage can be unavailable in restricted browser contexts.
    }
  }

  function translate(language) {
    const dictionary = translations[language] || translations.en;
    document.documentElement.lang = language === "tr" ? "tr" : "en";

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.getAttribute("data-i18n");
      if (dictionary[key]) {
        element.textContent = dictionary[key];
      }
    });

    document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
      const key = element.getAttribute("data-i18n-aria-label");
      if (dictionary[key]) {
        element.setAttribute("aria-label", dictionary[key]);
      }
    });

    document.querySelectorAll("[data-lang-block]").forEach((element) => {
      const isVisible = element.getAttribute("data-lang-block") === language;
      element.hidden = !isVisible;
      element.setAttribute("aria-hidden", String(!isVisible));
    });

    document.querySelectorAll("[data-lang-switch]").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.getAttribute("data-lang-switch") === language));
    });

    saveLanguage(language);
    updateMenuLabel();
  }

  function currentLanguage() {
    return document.documentElement.lang === "tr" ? "tr" : "en";
  }

  function updateMenuLabel() {
    const toggle = document.querySelector(".menu-toggle");
    if (!toggle) {
      return;
    }
    const isOpen = document.body.classList.contains("menu-open");
    const key = isOpen ? "menu.close" : "menu.open";
    toggle.setAttribute("aria-label", translations[currentLanguage()][key]);
    toggle.setAttribute("aria-expanded", String(isOpen));
  }

  function setupMenu() {
    const toggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".nav-shell");
    if (!toggle || !nav) {
      return;
    }

    toggle.addEventListener("click", () => {
      document.body.classList.toggle("menu-open");
      updateMenuLabel();
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        document.body.classList.remove("menu-open");
        updateMenuLabel();
      });
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        document.body.classList.remove("menu-open");
        updateMenuLabel();
      }
    });
  }

  function setupLanguageSwitching() {
    document.querySelectorAll("[data-lang-switch]").forEach((button) => {
      button.addEventListener("click", () => {
        translate(button.getAttribute("data-lang-switch") === "tr" ? "tr" : "en");
      });
    });
  }

  function setupContactForm() {
    const form = document.getElementById("contact-form");
    const status = document.getElementById("form-status");
    if (!form || !status) {
      return;
    }

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!form.reportValidity()) {
        return;
      }

      const data = new FormData(form);
      const inquirySelect = form.querySelector("#inquiry");
      const selectedInquiry = inquirySelect ? inquirySelect.options[inquirySelect.selectedIndex].text : String(data.get("inquiry") || "");
      const subject = "Alloy website inquiry - " + selectedInquiry;
      const lines = [
        "Name: " + String(data.get("name") || ""),
        "Email: " + String(data.get("email") || ""),
        "TikTok Username: " + String(data.get("username") || ""),
        "Inquiry Type: " + selectedInquiry,
        "",
        "Message:",
        String(data.get("message") || ""),
        "",
        "Security reminder: Please do not send passwords, verification codes, payment details, or sensitive identification documents."
      ];

      const mailto = "mailto:developer@alloy-live-agency.com?subject=" +
        encodeURIComponent(subject) +
        "&body=" +
        encodeURIComponent(lines.join("\n"));

      status.textContent = translations[currentLanguage()]["form.status"];
      window.location.href = mailto;
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    setupMenu();
    setupLanguageSwitching();
    setupContactForm();
    translate(readLanguage());
  });
})();
