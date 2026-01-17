import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Slider } from '@/components/ui/slider';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Index = () => {
  const [amount, setAmount] = useState(10000000);
  const [term, setTerm] = useState(3);
  const [clientType, setClientType] = useState<'IP' | 'OOO'>('IP');

  const calculatePayment = () => {
    const monthlyRate = (clientType === 'IP' ? 0.18 : 0.16) / 12;
    const termMonths = term * 12;
    const factor = (monthlyRate * Math.pow(1 + monthlyRate, termMonths)) / (Math.pow(1 + monthlyRate, termMonths) - 1);
    return Math.round(amount * factor);
  };

  const scrollToForm = () => {
    document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' });
  };

  const advantages = [
    { icon: 'Globe', title: 'Работаем по всей РФ', desc: 'Полностью дистанционно. Вам не нужно тратить время на пробки и очереди.' },
    { icon: 'HandCoins', title: 'Оплата за результат', desc: 'Никаких скрытых комиссий и предоплат. Наше вознаграждение только после получения денег.' },
    { icon: 'Building2', title: 'Единое окно в 40 банков', desc: 'Одна заявка заменяет десятки походов в разные банки.' },
    { icon: 'Layers', title: 'Любые суммы и цели', desc: 'От 1 млн на кассовый разрыв до 100 млрд на проектное финансирование.' },
    { icon: 'FileCheck', title: 'Минимум документов', desc: 'Сами готовим пакет документов под банк, помогаем заполнить анкеты.' },
    { icon: 'Scale', title: 'Честные условия', desc: 'Работаем строго в рамках закона, по договору. Прозрачные условия.' },
  ];

  const products = [
    {
      category: 'Базовые потребности',
      items: [
        { title: 'Экспресс-кредит без залога', desc: 'Быстрое решение для ИП и юрлиц. Минимум документов.', terms: '1–60 млн ₽ | 3–7 лет' },
        { title: 'Оборотный кредит', desc: 'Финансирование на пополнение оборотных средств.', terms: 'ИП: до 15 млн | ООО: до 500 млн' },
        { title: 'Кредит на развитие', desc: 'Масштабирование бизнеса, открытие новых точек.', terms: 'До 2 млрд ₽ | 3–10 лет' },
      ]
    },
    {
      category: 'Обеспечение и поддержка',
      items: [
        { title: 'Под залог недвижимости', desc: 'Деньги под залог коммерческой или жилой недвижимости.', terms: 'До 30 млн (70% оценки) | до 25 лет' },
        { title: 'Овердрафт', desc: 'Покрытие кассовых разрывов. Лимит по оборотам.', terms: '1–200 млн ₽ | 1–12 мес' },
        { title: 'Кредит с господдержкой', desc: 'Льготное кредитование приоритетных отраслей.', terms: '10 млн – 2 млрд ₽ | 3–10 лет' },
      ]
    },
    {
      category: 'Специальные цели',
      items: [
        { title: 'Для Селлеров (WB/Ozon)', desc: 'На закупку товара и масштабирование на маркетплейсах.', terms: 'До 150 млн ₽ без залога' },
        { title: 'На исполнение контракта', desc: 'Целевые деньги под выигранный тендер.', terms: 'Индивидуально под кейс' },
        { title: 'Проектное финансирование', desc: 'Инвестиционные проекты и строительство.', terms: 'До 100 млрд ₽ | 10–15 лет' },
      ]
    },
  ];

  const testimonials = [
    { name: 'Михаил С.', company: 'ООО "ТехСнаб"', text: 'Получили 15 млн на оборотку за 3 дня. Без поездок и лишних бумаг. Рекомендую!' },
    { name: 'Анна К.', company: 'ИП Карпова', text: 'Работала с другими брокерами - только БизнесКредит реально помог. Честно и быстро.' },
    { name: 'Дмитрий П.', company: 'ООО "СтройМастер"', text: 'Одобрили 50 млн под проект. Помогли со всеми документами, сопровождали до конца.' },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-md z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="text-2xl font-bold text-primary flex items-center gap-2">
              <Icon name="Briefcase" size={28} />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                БизнесКредит
              </span>
            </div>
          </div>

          <nav className="hidden md:flex gap-6 text-sm font-semibold">
            <a href="#advantages" className="hover:text-primary transition">Преимущества</a>
            <a href="#products" className="hover:text-primary transition">Услуги</a>
            <a href="#calculator" className="hover:text-primary transition">Калькулятор</a>
            <a href="#contacts" className="hover:text-primary transition">Контакты</a>
          </nav>

          <div className="hidden md:flex flex-col items-end">
            <a href="tel:+79054567680" className="font-bold text-primary text-lg">+7 (905) 456-76-80</a>
            <Button variant="outline" size="sm" onClick={scrollToForm} className="mt-1">
              Заказать звонок
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent opacity-90" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80')] bg-cover bg-center mix-blend-overlay opacity-20" />
        
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-3xl animate-fade-in">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">🚀 Финансовые решения для бизнеса</Badge>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
              Кредиты для бизнеса до <span className="text-accent">200 млн ₽</span> без визита в банк
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Получите одобрение от 1 рабочего дня. Единое окно в 40 банков-партнеров.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-10 text-sm font-medium">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Icon name="CheckCircle2" size={20} className="text-accent" />
                Решение от 1 дня
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Icon name="CheckCircle2" size={20} className="text-accent" />
                Без поездок в офисы
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Icon name="CheckCircle2" size={20} className="text-accent" />
                Оплата за результат
              </div>
            </div>

            <Button size="lg" onClick={scrollToForm} className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 shadow-2xl hover-scale">
              Получить предварительное решение
            </Button>
            <p className="mt-3 text-sm text-white/70">Это бесплатно и ни к чему не обязывает</p>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section id="advantages" className="py-20 bg-gradient-to-b from-white to-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Почему предприниматели доверяют нам
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Работаем прозрачно, быстро и эффективно
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((adv, idx) => (
              <Card key={idx} className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50 animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                    <Icon name={adv.icon as any} size={28} className="text-white" />
                  </div>
                  <CardTitle className="text-xl">{adv.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{adv.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Warning Block */}
      <section className="py-12 bg-destructive/10 border-y-2 border-destructive/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-start gap-4">
            <Icon name="AlertTriangle" className="text-destructive mt-1" size={32} />
            <div>
              <h3 className="text-2xl font-bold text-destructive mb-3">Важно: Кому мы НЕ сможем помочь</h3>
              <p className="mb-4 text-sm">Мы работаем только с действующим бизнесом. Заявка будет отклонена при наличии:</p>
              <div className="grid md:grid-cols-2 gap-3 text-sm">
                <div className="flex items-start gap-2">
                  <Icon name="X" className="text-destructive mt-0.5" size={18} />
                  <span>Плохая кредитная история (текущие просрочки)</span>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="X" className="text-destructive mt-0.5" size={18} />
                  <span>Долги перед ФССП и ФНС</span>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="X" className="text-destructive mt-0.5" size={18} />
                  <span>Текущие судебные иски</span>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="X" className="text-destructive mt-0.5" size={18} />
                  <span>Регистрация менее 6 месяцев</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section id="calculator" className="py-20 bg-gradient-to-br from-muted/50 to-white">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto shadow-2xl border-2">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Рассчитайте предварительный платеж
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-6">
                  <div className="flex bg-muted p-1 rounded-lg">
                    <Button
                      variant={clientType === 'IP' ? 'default' : 'ghost'}
                      className="flex-1"
                      onClick={() => setClientType('IP')}
                    >
                      ИП
                    </Button>
                    <Button
                      variant={clientType === 'OOO' ? 'default' : 'ghost'}
                      className="flex-1"
                      onClick={() => setClientType('OOO')}
                    >
                      ООО
                    </Button>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-3">
                      Сумма кредита: <span className="text-primary font-bold">{amount.toLocaleString('ru-RU')} ₽</span>
                    </label>
                    <Slider
                      value={[amount]}
                      onValueChange={([val]) => setAmount(val)}
                      min={1000000}
                      max={200000000}
                      step={1000000}
                      className="mb-2"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>1 млн</span>
                      <span>200 млн</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-3">
                      Срок кредита: <span className="text-primary font-bold">{term} {term === 1 ? 'год' : term < 5 ? 'года' : 'лет'}</span>
                    </label>
                    <Slider
                      value={[term]}
                      onValueChange={([val]) => setTerm(val)}
                      min={1}
                      max={10}
                      step={1}
                      className="mb-2"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>1 год</span>
                      <span>10 лет</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-primary to-secondary text-white rounded-2xl p-8 flex flex-col justify-center items-center text-center shadow-xl">
                  <p className="text-sm opacity-80 mb-2">Примерный ежемесячный платеж</p>
                  <p className="text-5xl font-bold mb-8">{calculatePayment().toLocaleString('ru-RU')} ₽</p>
                  <Button size="lg" onClick={scrollToForm} className="bg-accent hover:bg-accent/90 w-full mb-4">
                    Узнать точную ставку
                  </Button>
                  <p className="text-xs opacity-60">Расчет предварительный. Ставка зависит от программы.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Подберем программу под ваши цели
          </h2>
          <p className="text-center text-muted-foreground mb-12">Широкий выбор финансовых продуктов</p>

          <div className="space-y-12">
            {products.map((category, catIdx) => (
              <div key={catIdx}>
                <h3 className="text-xl font-semibold text-muted-foreground mb-6 border-b pb-2">{category.category}</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {category.items.map((product, idx) => (
                    <Card key={idx} className="hover:shadow-xl transition-all hover:-translate-y-1 border-2 hover:border-primary/30">
                      <CardHeader>
                        <CardTitle className="text-lg text-primary">{product.title}</CardTitle>
                        <CardDescription>{product.desc}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="bg-muted p-3 rounded-lg mb-4 text-sm font-semibold">
                          {product.terms}
                        </div>
                        <Button variant="outline" className="w-full hover:bg-primary hover:text-white" onClick={scrollToForm}>
                          Оставить заявку
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-muted/30 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Отзывы наших клиентов
          </h2>
          <p className="text-center text-muted-foreground mb-12">Реальные истории успеха</p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="hover:shadow-xl transition-all hover:-translate-y-1 animate-fade-in" style={{ animationDelay: `${idx * 150}ms` }}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <CardTitle className="text-base">{testimonial.name}</CardTitle>
                      <CardDescription className="text-xs">{testimonial.company}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground italic">"{testimonial.text}"</p>
                  <div className="flex gap-1 mt-3">
                    {[1,2,3,4,5].map(star => (
                      <Icon key={star} name="Star" size={16} className="fill-accent text-accent" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Схема работы
          </h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { num: 1, title: 'Заявка (5 мин)', desc: 'Вы заполняете форму на сайте', color: 'from-primary to-secondary' },
              { num: 2, title: 'Анализ (1 час)', desc: 'Проверяем и подбираем банк', color: 'from-secondary to-accent' },
              { num: 3, title: 'Подача (1 день)', desc: 'Готовим и отправляем документы', color: 'from-accent to-primary' },
              { num: 4, title: 'Деньги', desc: 'Решение и перевод средств', color: 'from-primary to-accent' },
            ].map((step) => (
              <div key={step.num} className="text-center relative animate-fade-in" style={{ animationDelay: `${step.num * 150}ms` }}>
                <div className={`w-20 h-20 bg-gradient-to-br ${step.color} text-white rounded-full flex items-center justify-center mx-auto text-3xl font-bold mb-4 shadow-xl`}>
                  {step.num}
                </div>
                <h3 className="font-bold mb-2 text-lg">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-10 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Частые вопросы
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white rounded-lg px-6 border-2">
              <AccordionTrigger className="font-bold text-primary hover:no-underline">
                Нужно ли ехать в банк?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Нет, 95% процессов проходят дистанционно. Визит может потребоваться только на подписание финального договора в некоторых банках.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="bg-white rounded-lg px-6 border-2">
              <AccordionTrigger className="font-bold text-primary hover:no-underline">
                Гарантируете одобрение?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Мы максимизируем шансы, зная скоринг 40 банков. Гарантии 100% дают только мошенники.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="bg-white rounded-lg px-6 border-2">
              <AccordionTrigger className="font-bold text-primary hover:no-underline">
                Сколько стоят услуги?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Мы работаем без предоплаты. Комиссия оплачивается только по факту поступления кредитных денег на ваш счет.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section id="contacts" className="py-20 bg-gradient-to-br from-primary via-secondary to-accent text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]" />
        </div>
        
        <div className="container mx-auto px-4 max-w-2xl relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">Нужны деньги на развитие?</h2>
            <p className="text-xl text-white/90">Не теряйте время на отказы. Оставьте заявку сейчас!</p>
          </div>

          <Card className="shadow-2xl">
            <CardContent className="p-8">
              <form className="space-y-4">
                <Input placeholder="Ваше имя" className="h-12" required />
                <Input type="tel" placeholder="+7 (___) ___-__-__" className="h-12" required />
                <Input placeholder="ИНН (необязательно)" className="h-12" />
                <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg h-12">
                  Рассчитать кредит
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm mb-6">
            <div className="text-center md:text-left">
              <div className="font-bold text-white text-xl mb-2 flex items-center gap-2 justify-center md:justify-start">
                <Icon name="Briefcase" size={24} className="text-primary" />
                БизнесКредит
              </div>
              <p>Сервис по подбору финансовых услуг</p>
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition">Политика конфиденциальности</a>
              <a href="#" className="hover:text-white transition">Оферта</a>
            </div>
            <div className="text-center md:text-right">
              <a href="tel:+79054567680" className="block text-white font-bold text-lg hover:text-primary transition">
                +7 (905) 456-76-80
              </a>
              <p className="text-sm">info@businesscredit.ru</p>
            </div>
          </div>
          <div className="text-xs text-gray-600 text-center max-w-4xl mx-auto border-t border-gray-800 pt-6">
            Сайт не является финансовой организацией и не выдает кредиты. Информация носит ознакомительный характер и не является публичной офертой.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
