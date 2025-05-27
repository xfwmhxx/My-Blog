import{_ as s,b as a,f as l,I as p}from"./chunks/framework.DYvp_Vyw.js";const d=JSON.parse('{"title":"Java期末复习笔记 - 第八章 - 继承、抽象类、接口与枚举","description":"","frontmatter":{"title":"Java期末复习笔记 - 第八章 - 继承、抽象类、接口与枚举","date":"2025-05-07T01:55:13.000Z","tags":["Java"],"head":[["meta",{"name":"descriptionx x x","content":"vitepress-theme-bluearchive Tags"}],["meta",{"name":"keywords","content":"vitepress theme bluearchive Tags"}]]},"headers":[],"relativePath":"posts/Java-Own-Study-008.md","filePath":"posts/Java-Own-Study-008.md"}'),e={name:"posts/Java-Own-Study-008.md"};function i(r,n,c,o,t,b){return l(),a("div",null,n[0]||(n[0]=[p(`<p>大二上学期的期末复习笔记。</p><hr><div style="text-align:center;"><h1>继承、抽象类、接口与枚举</h1></div><h1 id="_1-类的继承" tabindex="-1"><u style="text-decoration:underline;text-decoration-color:deepskyblue;">1.类的继承 </u> <a class="header-anchor" href="#_1-类的继承" aria-label="Permalink to &quot;&lt;u style=&quot;text-decoration: underline; text-decoration-color: deepskyblue;&quot;&gt;1.类的继承 &lt;/u&gt;&quot;">​</a></h1><p>类的继承是 Java 中面向对象编程的重要特性之一，它允许一个类（子类）继承另一个类（父类）的属性和方法。继承使得代码复用成为可能，并且通过层次结构组织类的关系。以下是对类的继承的详细讲解。</p><h3 id="_1-1-继承的基本概念" tabindex="-1">1.1 继承的基本概念 <a class="header-anchor" href="#_1-1-继承的基本概念" aria-label="Permalink to &quot;1.1 继承的基本概念&quot;">​</a></h3><ul><li><strong>父类（Superclass）</strong>：被继承的类，包含共享的属性和方法。</li><li><strong>子类（Subclass）</strong>：继承父类的类，可以访问父类的公共和受保护的成员，同时可以定义自己的属性和方法。</li></ul><h3 id="_1-2-继承的语法" tabindex="-1">1.2 继承的语法 <a class="header-anchor" href="#_1-2-继承的语法" aria-label="Permalink to &quot;1.2 继承的语法&quot;">​</a></h3><p>在 Java 中，使用 <code>extends</code> 关键字来实现继承。子类通过 <code>extends</code> 关键字声明继承父类。</p><h4 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h4><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki solarized-dark vp-code" tabindex="0"><code><span class="line"><span>// 父类</span></span>
<span class="line"><span>public class Animal {</span></span>
<span class="line"><span>    public void eat() {</span></span>
<span class="line"><span>        System.out.println(&quot;Animal is eating.&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 子类</span></span>
<span class="line"><span>public class Dog extends Animal {</span></span>
<span class="line"><span>    public void bark() {</span></span>
<span class="line"><span>        System.out.println(&quot;Dog is barking.&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class Main {</span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        Dog myDog = new Dog();</span></span>
<span class="line"><span>        myDog.eat(); // 继承父类的方法</span></span>
<span class="line"><span>        myDog.bark(); // 子类的方法</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h3 id="_1-3-继承的特点" tabindex="-1">1.3 继承的特点 <a class="header-anchor" href="#_1-3-继承的特点" aria-label="Permalink to &quot;1.3 继承的特点&quot;">​</a></h3><ul><li><strong>代码复用</strong>：子类可以直接使用父类的属性和方法，减少代码重复。</li><li><strong>方法重写</strong>：子类可以重写（Override）父类的方法，以实现特定的功能。重写的方法必须与父类方法具有相同的名称、返回类型和参数列表。</li></ul><h4 id="示例-1" tabindex="-1">示例 <a class="header-anchor" href="#示例-1" aria-label="Permalink to &quot;示例&quot;">​</a></h4><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki solarized-dark vp-code" tabindex="0"><code><span class="line"><span>public class Animal {</span></span>
<span class="line"><span>    public void sound() {</span></span>
<span class="line"><span>        System.out.println(&quot;Animal makes a sound.&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class Dog extends Animal {</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void sound() {</span></span>
<span class="line"><span>        System.out.println(&quot;Dog barks.&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class Main {</span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        Dog myDog = new Dog();</span></span>
<span class="line"><span>        myDog.sound(); // 输出: Dog barks.</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h3 id="_1-4-继承的限制" tabindex="-1">1.4 继承的限制 <a class="header-anchor" href="#_1-4-继承的限制" aria-label="Permalink to &quot;1.4 继承的限制&quot;">​</a></h3><ul><li><strong>单继承</strong>：Java 不支持多重继承，即一个类只能直接继承一个父类。这是为了避免菱形继承问题（即同一个父类被多次继承）。</li><li><strong>构造方法</strong>：子类的构造方法会调用父类的构造方法。可以使用 <code>super</code> 关键字显式调用父类的构造方法。</li></ul><h4 id="示例-2" tabindex="-1">示例 <a class="header-anchor" href="#示例-2" aria-label="Permalink to &quot;示例&quot;">​</a></h4><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki solarized-dark vp-code" tabindex="0"><code><span class="line"><span>public class Animal {</span></span>
<span class="line"><span>    public Animal() {</span></span>
<span class="line"><span>        System.out.println(&quot;Animal constructor called.&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class Dog extends Animal {</span></span>
<span class="line"><span>    public Dog() {</span></span>
<span class="line"><span>        super(); // 调用父类构造方法</span></span>
<span class="line"><span>        System.out.println(&quot;Dog constructor called.&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class Main {</span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        Dog myDog = new Dog(); // 输出: Animal constructor called. Dog constructor called.</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><blockquote><p>还可以用<code>super.变量名</code> 和 <code>super.方法名()</code>来访问父类中的成员变量和成员方法。</p></blockquote><h3 id="_1-5-访问修饰符与继承" tabindex="-1">1.5 访问修饰符与继承 <a class="header-anchor" href="#_1-5-访问修饰符与继承" aria-label="Permalink to &quot;1.5 访问修饰符与继承&quot;">​</a></h3><ul><li><strong>public</strong> 和 <strong>protected</strong> 成员可以被子类访问。</li><li><strong>private</strong> 成员不能被子类直接访问，但可以通过父类的公共或受保护的方法访问。</li></ul><h3 id="_1-6-覆盖" tabindex="-1">1.6 覆盖 <a class="header-anchor" href="#_1-6-覆盖" aria-label="Permalink to &quot;1.6 覆盖&quot;">​</a></h3><h4 id="_1-6-1-什么是覆盖" tabindex="-1">1.6.1 什么是覆盖 <a class="header-anchor" href="#_1-6-1-什么是覆盖" aria-label="Permalink to &quot;1.6.1 什么是覆盖&quot;">​</a></h4><p>覆盖是指在子类中重新定义一个与父类中同名、参数列表相同的方法。通过覆盖，子类可以提供自己的实现，以替代父类的实现。</p><h4 id="_1-6-2-覆盖的基本规则" tabindex="-1">1.6.2 覆盖的基本规则 <a class="header-anchor" href="#_1-6-2-覆盖的基本规则" aria-label="Permalink to &quot;1.6.2 覆盖的基本规则&quot;">​</a></h4><ul><li><strong>方法名称</strong>：子类方法的名称必须与父类方法相同。</li><li><strong>参数列表</strong>：子类方法的参数列表必须与父类方法相同（包括参数的类型和顺序）。</li><li><strong>返回类型</strong>：子类方法的返回类型必须与父类方法相同，或者是父类方法返回类型的子类（这称为协变返回类型）。</li><li><strong>访问修饰符</strong>：子类方法的访问修饰符不能比父类方法更严格，可以是相同或更宽松的修饰符。例如，如果父类方法是 <code>protected</code>，子类方法可以是 <code>protected</code> 或 <code>public</code>。</li></ul><blockquote><p>子类不能覆盖父类中声明为final和static的方法。</p></blockquote><h4 id="_1-6-3-覆盖的示例" tabindex="-1">1.6.3 覆盖的示例 <a class="header-anchor" href="#_1-6-3-覆盖的示例" aria-label="Permalink to &quot;1.6.3 覆盖的示例&quot;">​</a></h4><p>以下是一个简单的示例，展示如何在子类中覆盖父类的方法：</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki solarized-dark vp-code" tabindex="0"><code><span class="line"><span>// 父类</span></span>
<span class="line"><span>public class Animal {</span></span>
<span class="line"><span>    public void sound() {</span></span>
<span class="line"><span>        System.out.println(&quot;Animal makes a sound.&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 子类</span></span>
<span class="line"><span>public class Dog extends Animal {</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void sound() {</span></span>
<span class="line"><span>        System.out.println(&quot;Dog barks.&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class Main {</span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        Animal myAnimal = new Animal();</span></span>
<span class="line"><span>        myAnimal.sound(); // 输出: Animal makes a sound.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        Dog myDog = new Dog();</span></span>
<span class="line"><span>        myDog.sound(); // 输出: Dog barks.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        Animal myPet = new Dog();</span></span>
<span class="line"><span>        myPet.sound(); // 输出: Dog barks. (多态性)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><h4 id="_1-6-4-覆盖的关键点" tabindex="-1">1.6.4 覆盖的关键点 <a class="header-anchor" href="#_1-6-4-覆盖的关键点" aria-label="Permalink to &quot;1.6.4 覆盖的关键点&quot;">​</a></h4><ul><li><p><strong>多态性</strong>：通过覆盖，可以实现多态性。当父类引用指向子类对象时，调用的方法是子类中覆盖的方法，而不是父类的方法。这种特性使得程序更加灵活。</p></li><li><p><strong><code>@Override</code> 注解</strong>：虽然不是强制的，但推荐在子类方法上使用 <code>@Override</code> 注解，它可以帮助编译器检查是否正确地覆盖了父类的方法。如果方法没有正确覆盖，编译器会报错。</p></li></ul><blockquote><p>@Override只用于方法，用来限定必须覆盖父类中的方法。</p></blockquote><h4 id="_1-6-5-注意事项" tabindex="-1">1.6.5 注意事项 <a class="header-anchor" href="#_1-6-5-注意事项" aria-label="Permalink to &quot;1.6.5 注意事项&quot;">​</a></h4><ul><li><strong>构造方法</strong>：构造方法不能被覆盖。每个类都有自己的构造方法，子类的构造方法不会影响父类的构造方法。</li><li><strong>静态方法</strong>：静态方法不能被覆盖。静态方法属于类而不是对象，因此它们不会表现出多态性，子类可以拥有与父类同名的静态方法，但这被称为隐藏（hiding），而不是覆盖。</li></ul><h3 id="_1-7用父类对象访问子类成员" tabindex="-1">1.7用父类对象访问子类成员 <a class="header-anchor" href="#_1-7用父类对象访问子类成员" aria-label="Permalink to &quot;1.7用父类对象访问子类成员&quot;">​</a></h3><p>在 Java 中，父类的对象不能直接访问子类的成员（属性和方法），因为父类的引用只能访问父类定义的成员。这是因为父类的对象并不知道子类中存在的额外属性或方法。然而，子类的对象可以被赋值给父类的引用，从而实现多态性，但在这种情况下，仍然只能访问父类的成员。</p><h4 id="_1-7-1-通过父类引用访问子类对象" tabindex="-1">1.7.1 通过父类引用访问子类对象 <a class="header-anchor" href="#_1-7-1-通过父类引用访问子类对象" aria-label="Permalink to &quot;1.7.1 通过父类引用访问子类对象&quot;">​</a></h4><p>尽管父类的对象不能访问子类的成员，但可以使用父类的引用指向子类的对象。这种情况下，父类引用只能调用父类的方法，而无法直接调用子类特有的方法。</p><h4 id="示例-3" tabindex="-1">示例 <a class="header-anchor" href="#示例-3" aria-label="Permalink to &quot;示例&quot;">​</a></h4><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki solarized-dark vp-code" tabindex="0"><code><span class="line"><span>// 父类</span></span>
<span class="line"><span>public class Animal {</span></span>
<span class="line"><span>    public void eat() {</span></span>
<span class="line"><span>        System.out.println(&quot;Animal is eating.&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 子类</span></span>
<span class="line"><span>public class Dog extends Animal {</span></span>
<span class="line"><span>    public void bark() {</span></span>
<span class="line"><span>        System.out.println(&quot;Dog is barking.&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class Main {</span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        Animal myAnimal = new Dog(); // 父类引用指向子类对象</span></span>
<span class="line"><span>        myAnimal.eat(); // 调用父类的方法</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // myAnimal.bark();</span><span> // 错误：无法访问子类特有的方法</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h4 id="_1-7-2-通过类型转换访问子类的成员" tabindex="-1">1.7.2 通过类型转换访问子类的成员 <a class="header-anchor" href="#_1-7-2-通过类型转换访问子类的成员" aria-label="Permalink to &quot;1.7.2 通过类型转换访问子类的成员&quot;">​</a></h4><p>如果你需要访问子类的特定成员，可以通过强制类型转换将父类引用转换为子类类型。这样可以访问子类的成员，但在执行转换前，应确保引用确实指向的是子类对象，以避免 <code>ClassCastException</code>。</p><h4 id="示例-4" tabindex="-1">示例 <a class="header-anchor" href="#示例-4" aria-label="Permalink to &quot;示例&quot;">​</a></h4><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki solarized-dark vp-code" tabindex="0"><code><span class="line"><span>public class Main {</span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        Animal myAnimal = new Dog(); // 父类引用指向子类对象</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 向下转型</span></span>
<span class="line"><span>        if (myAnimal instanceof Dog) { // 检查是否是 Dog 的实例</span></span>
<span class="line"><span>            Dog myDog = (Dog) myAnimal; // 强制类型转换</span></span>
<span class="line"><span>            myDog.bark(); // 现在可以访问子类的方法</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h4 id="_1-7-3-总结" tabindex="-1">1.7.3 总结 <a class="header-anchor" href="#_1-7-3-总结" aria-label="Permalink to &quot;1.7.3 总结&quot;">​</a></h4><ul><li>父类的对象不能直接访问子类的成员。</li><li>父类引用可以指向子类对象，但只能调用父类的方法。</li><li>可以通过强制类型转换来访问子类的特有成员，但需谨慎处理，避免类型转换异常。</li></ul><h3 id="_1-8-final成员与final类" tabindex="-1">1.8 final成员与final类 <a class="header-anchor" href="#_1-8-final成员与final类" aria-label="Permalink to &quot;1.8 final成员与final类&quot;">​</a></h3><p>在 Java 中，<code>final</code> 关键字用于声明不可修改的成员和类。它可以用于变量、方法和类，具有不同的含义。以下是对 <code>final</code> 成员和 <code>final</code> 类的详细讲解。</p><h4 id="_1-8-1-final-成员" tabindex="-1">1.8.1 <code>final</code> 成员 <a class="header-anchor" href="#_1-8-1-final-成员" aria-label="Permalink to &quot;1.8.1 \`final\` 成员&quot;">​</a></h4><h5 id="_1-8-1-1-final-变量" tabindex="-1">1.8.1.1 <code>final</code> 变量 <a class="header-anchor" href="#_1-8-1-1-final-变量" aria-label="Permalink to &quot;1.8.1.1 \`final\` 变量&quot;">​</a></h5><ul><li><strong>定义</strong>：当一个变量被声明为 <code>final</code> 时，它的值在初始化后不能再被修改。</li><li><strong>特性</strong>： <ul><li><code>final</code> 变量必须在声明时或构造函数中初始化。</li><li>对于引用类型，<code>final</code> 变量的引用不可变，但引用的对象状态是可变的。</li></ul></li></ul><h4 id="示例-5" tabindex="-1">示例 <a class="header-anchor" href="#示例-5" aria-label="Permalink to &quot;示例&quot;">​</a></h4><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki solarized-dark vp-code" tabindex="0"><code><span class="line"><span>public class Example {</span></span>
<span class="line"><span>    final int CONSTANT_VALUE = 10; // 声明并初始化 final 变量</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public Example() {</span></span>
<span class="line"><span>        // CONSTANT_VALUE = 20;</span><span> // 错误：无法修改 final 变量</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h4 id="_1-8-2-final-方法" tabindex="-1">1.8.2 <code>final</code> 方法 <a class="header-anchor" href="#_1-8-2-final-方法" aria-label="Permalink to &quot;1.8.2 \`final\` 方法&quot;">​</a></h4><ul><li><strong>定义</strong>：当一个方法被声明为 <code>final</code> 时，它不能被子类重写。</li><li><strong>特性</strong>： <ul><li><code>final</code> 方法可以确保类的行为不被改变，适用于不希望被修改的方法。</li></ul></li></ul><h4 id="示例-6" tabindex="-1">示例 <a class="header-anchor" href="#示例-6" aria-label="Permalink to &quot;示例&quot;">​</a></h4><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki solarized-dark vp-code" tabindex="0"><code><span class="line"><span>public class Parent {</span></span>
<span class="line"><span>    public final void show() {</span></span>
<span class="line"><span>        System.out.println(&quot;This is a final method.&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class Child extends Parent {</span></span>
<span class="line"><span>    // public void show() {</span><span> // 错误：无法重写 final 方法</span></span>
<span class="line"><span>    //     System.out.println(&quot;Trying to override.&quot;);</span></span>
<span class="line"><span>    // }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h4 id="_1-8-3-final-类" tabindex="-1">1.8.3 <code>final</code> 类 <a class="header-anchor" href="#_1-8-3-final-类" aria-label="Permalink to &quot;1.8.3 \`final\` 类&quot;">​</a></h4><ul><li><strong>定义</strong>：当一个类被声明为 <code>final</code> 时，不能被继承。</li><li><strong>特性</strong>： <ul><li><code>final</code> 类可以防止其他类扩展该类的功能，适用于不希望被子类化的类。</li></ul></li></ul><h4 id="示例-7" tabindex="-1">示例 <a class="header-anchor" href="#示例-7" aria-label="Permalink to &quot;示例&quot;">​</a></h4><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki solarized-dark vp-code" tabindex="0"><code><span class="line"><span>public final class FinalClass {</span></span>
<span class="line"><span>    public void display() {</span></span>
<span class="line"><span>        System.out.println(&quot;This is a final class.&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// class SubClass extends FinalClass {</span><span> // 错误：无法继承 final 类</span></span>
<span class="line"><span>// }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h4 id="_1-8-4-总结" tabindex="-1">1.8.4 总结 <a class="header-anchor" href="#_1-8-4-总结" aria-label="Permalink to &quot;1.8.4 总结&quot;">​</a></h4><ul><li><strong><code>final</code> 变量</strong>：一旦初始化后，其值不可更改。</li><li><strong><code>final</code> 方法</strong>：不能被子类重写，确保类的行为保持不变。</li><li><strong><code>final</code> 类</strong>：无法被继承，确保类的实现不被扩展。</li></ul><h3 id="_1-9-object类" tabindex="-1">1.9 Object类 <a class="header-anchor" href="#_1-9-object类" aria-label="Permalink to &quot;1.9 Object类&quot;">​</a></h3><table tabindex="0"><thead><tr><th>方法</th><th>描述</th></tr></thead><tbody><tr><td><code>public boolean equals(Object obj)</code></td><td>比较两个对象的内容是否相等。默认实现比较对象的引用，可以被重写以比较对象的实际内容。</td></tr><tr><td><code>public String toString()</code></td><td>返回对象的字符串表示，默认实现返回对象的类名和哈希码。可以被重写以提供更友好的输出。</td></tr><tr><td><code>protected Object clone()</code></td><td>创建并返回对象的一个副本。需要实现 <code>Cloneable</code> 接口才能正常工作。</td></tr><tr><td><code>public final Class&lt;?&gt; getClass()</code></td><td>返回对象的运行时类信息。</td></tr></tbody></table><h3 id="_1-10-局部变量类型推断与继承" tabindex="-1">1.10 局部变量类型推断与继承 <a class="header-anchor" href="#_1-10-局部变量类型推断与继承" aria-label="Permalink to &quot;1.10 局部变量类型推断与继承&quot;">​</a></h3><blockquote><p>（详见书本P154）</p></blockquote><h1 id="_2-抽象类" tabindex="-1"><u style="text-decoration:underline;text-decoration-color:deepskyblue;">2.抽象类 </u> <a class="header-anchor" href="#_2-抽象类" aria-label="Permalink to &quot;&lt;u style=&quot;text-decoration: underline; text-decoration-color: deepskyblue;&quot;&gt;2.抽象类 &lt;/u&gt;&quot;">​</a></h1><p>在 Java 中，抽象类和抽象方法是面向对象编程的核心概念，主要用于定义一组不完全实现的类和方法。以下是对抽象类和抽象方法的详细讲解。</p><blockquote><p>抽象类的子类必须实现父类中的所有抽象方法，或者将自己也声明成抽象的。</p></blockquote><h3 id="_2-1-抽象类" tabindex="-1">2.1 抽象类 <a class="header-anchor" href="#_2-1-抽象类" aria-label="Permalink to &quot;2.1 抽象类&quot;">​</a></h3><p><strong>定义</strong>：抽象类是一个不能被实例化的类，通常用于定义一个基类，供其他类继承。抽象类可以包含抽象方法（没有实现的方法）和具体方法（有实现的方法）。</p><p><strong>特点</strong>：</p><ul><li>使用 <code>abstract</code> 关键字声明。</li><li>可以包含抽象方法和具体方法。</li><li>可以有构造方法和成员变量。</li><li>子类必须实现所有抽象方法，除非子类也是抽象类。</li></ul><h4 id="示例-8" tabindex="-1">示例 <a class="header-anchor" href="#示例-8" aria-label="Permalink to &quot;示例&quot;">​</a></h4><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki solarized-dark vp-code" tabindex="0"><code><span class="line"><span>// 抽象类</span></span>
<span class="line"><span>public abstract class Animal {</span></span>
<span class="line"><span>    // 抽象方法</span></span>
<span class="line"><span>    public abstract void sound();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 具体方法</span></span>
<span class="line"><span>    public void eat() {</span></span>
<span class="line"><span>        System.out.println(&quot;Animal is eating.&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 子类</span></span>
<span class="line"><span>public class Dog extends Animal {</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void sound() {</span></span>
<span class="line"><span>        System.out.println(&quot;Dog barks.&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class Main {</span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        Dog myDog = new Dog();</span></span>
<span class="line"><span>        myDog.sound(); // 输出: Dog barks.</span></span>
<span class="line"><span>        myDog.eat();   // 输出: Animal is eating.</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h3 id="_2-2-抽象方法" tabindex="-1">2.2 抽象方法 <a class="header-anchor" href="#_2-2-抽象方法" aria-label="Permalink to &quot;2.2 抽象方法&quot;">​</a></h3><p><strong>定义</strong>：抽象方法是没有方法体的方法，只有方法签名，具体实现由子类提供。</p><p><strong>特点</strong>：</p><ul><li>使用 <code>abstract</code> 关键字声明。</li><li>不能在抽象方法中提供实现（即不能有 <code>{}</code>）。</li><li>只能在抽象类中声明。</li><li>子类必须实现抽象方法，除非子类也是抽象类。</li></ul><h4 id="示例-9" tabindex="-1">示例 <a class="header-anchor" href="#示例-9" aria-label="Permalink to &quot;示例&quot;">​</a></h4><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki solarized-dark vp-code" tabindex="0"><code><span class="line"><span>public abstract class Shape {</span></span>
<span class="line"><span>    // 抽象方法</span></span>
<span class="line"><span>    public abstract double area();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class Circle extends Shape {</span></span>
<span class="line"><span>    private double radius;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public Circle(double radius) {</span></span>
<span class="line"><span>        this.radius = radius;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public double area() {</span></span>
<span class="line"><span>        return Math.PI * radius * radius; // 实现抽象方法</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class Main {</span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        Shape myCircle = new Circle(5);</span></span>
<span class="line"><span>        System.out.println(&quot;Area of circle: &quot; + myCircle.area()); // 输出: Area of circle: 78.53981633974483</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h3 id="_2-3-总结" tabindex="-1">2.3 总结 <a class="header-anchor" href="#_2-3-总结" aria-label="Permalink to &quot;2.3 总结&quot;">​</a></h3><ul><li><p><strong>抽象类</strong>：</p><ul><li>不能被实例化。</li><li>可以包含抽象方法和具体方法。</li><li>主要用于定义一组共享的行为，供子类继承和实现。</li></ul></li><li><p><strong>抽象方法</strong>：</p><ul><li>只有方法签名，没有方法体。</li><li>由子类实现，强制子类提供具体实现。</li></ul></li></ul><h1 id="_3-接口" tabindex="-1"><u style="text-decoration:underline;text-decoration-color:deepskyblue;">3.接口 </u> <a class="header-anchor" href="#_3-接口" aria-label="Permalink to &quot;&lt;u style=&quot;text-decoration: underline; text-decoration-color: deepskyblue;&quot;&gt;3.接口 &lt;/u&gt;&quot;">​</a></h1><blockquote><p>接口与抽象类有下列不同： 1.接口的数据成员必须都是静态常量且初始化。 2.接口中除了声明抽象方法外，还可以定义私有方法、静态方法和默认方法，但不能定义一般方法。</p></blockquote><hr>`,89)]))}const m=s(e,[["render",i]]);export{d as __pageData,m as default};
