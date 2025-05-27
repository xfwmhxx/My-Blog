import{_ as s,b as a,f as p,I as e}from"./chunks/framework.DYvp_Vyw.js";const d=JSON.parse('{"title":"Java期末复习笔记 - 第七章 - Java语言的特点","description":"","frontmatter":{"title":"Java期末复习笔记 - 第七章 - Java语言的特点","date":"2025-05-07T01:54:13.000Z","tags":["Java"],"head":[["meta",{"name":"descriptionx x x","content":"vitepress-theme-bluearchive Tags"}],["meta",{"name":"keywords","content":"vitepress theme bluearchive Tags"}]]},"headers":[],"relativePath":"posts/Java-Own-Study-007.md","filePath":"posts/Java-Own-Study-007.md"}'),l={name:"posts/Java-Own-Study-007.md"};function i(r,n,c,t,o,b){return p(),a("div",null,n[0]||(n[0]=[e(`<p>大二上学期的期末复习笔记。</p><hr><div style="text-align:center;"><h1>Java语言的特点</h1></div><h1 id="_1-类的私有成员与公共成员" tabindex="-1"><u style="text-decoration:underline;text-decoration-color:deepskyblue;">1.类的私有成员与公共成员 </u> <a class="header-anchor" href="#_1-类的私有成员与公共成员" aria-label="Permalink to &quot;&lt;u style=&quot;text-decoration: underline; text-decoration-color: deepskyblue;&quot;&gt;1.类的私有成员与公共成员 &lt;/u&gt;&quot;">​</a></h1><h3 id="_1-1-私有成员" tabindex="-1">1.1 私有成员 <a class="header-anchor" href="#_1-1-私有成员" aria-label="Permalink to &quot;1.1 私有成员&quot;">​</a></h3><p>Java语言提供了私有成员访问符private，那么就无法从该类的外部访问到该类内部的成员，而职能被该类自身访问和修改，而不能被任何其他类，包括该类的子类来获取或引用，因此达到了对数据最高级别保护的目的。</p><h3 id="_1-2-公共成员" tabindex="-1">1.2 公共成员 <a class="header-anchor" href="#_1-2-公共成员" aria-label="Permalink to &quot;1.2 公共成员&quot;">​</a></h3><p>如果在类的成员声明前加上修饰符public，则表示该类成员可以被所有其他类访问。</p><h3 id="_1-3-无访问控制符" tabindex="-1">1.3 无访问控制符 <a class="header-anchor" href="#_1-3-无访问控制符" aria-label="Permalink to &quot;1.3 无访问控制符&quot;">​</a></h3><p>若在类成员的前面不加任何访问控制符，则该类成员具有默认访问控制特性。这种默认访问控制权表示这个成员只能被同一个包中的类所访问和使用。</p><h1 id="_2-方法的重载" tabindex="-1"><u style="text-decoration:underline;text-decoration-color:deepskyblue;">2.方法的重载 </u> <a class="header-anchor" href="#_2-方法的重载" aria-label="Permalink to &quot;&lt;u style=&quot;text-decoration: underline; text-decoration-color: deepskyblue;&quot;&gt;2.方法的重载 &lt;/u&gt;&quot;">​</a></h1><h3 id="_2-1-定义" tabindex="-1">2.1 定义 <a class="header-anchor" href="#_2-1-定义" aria-label="Permalink to &quot;2.1 定义&quot;">​</a></h3><p>重载是指在一个类内具有相同名称的多个方法，如果这些同名的方法参数个数不同，或者参数个数相同但是类型不同，则这些同名方法就具有不同的功能。</p><p>（详细在视频代码中演示）</p><h1 id="_3-构造方法" tabindex="-1"><u style="text-decoration:underline;text-decoration-color:deepskyblue;">3.构造方法 </u> <a class="header-anchor" href="#_3-构造方法" aria-label="Permalink to &quot;&lt;u style=&quot;text-decoration: underline; text-decoration-color: deepskyblue;&quot;&gt;3.构造方法 &lt;/u&gt;&quot;">​</a></h1><blockquote><p>如果一个对象在被创建时就完成了所有的初始化工作，将会很简洁。因此Java语言在类中提供了一个特殊的成员变量--构造方法。</p></blockquote><h3 id="构造方法-constructor-是-java-中的一种特殊方法-用于初始化对象的状态。当创建对象时-构造方法会被自动调用-以确保对象的属性得到适当的设置。以下是构造方法的作用与定义的详细说明" tabindex="-1">构造方法（Constructor）是 Java 中的一种特殊方法，用于初始化对象的状态。当创建对象时，构造方法会被自动调用，以确保对象的属性得到适当的设置。以下是构造方法的作用与定义的详细说明： <a class="header-anchor" href="#构造方法-constructor-是-java-中的一种特殊方法-用于初始化对象的状态。当创建对象时-构造方法会被自动调用-以确保对象的属性得到适当的设置。以下是构造方法的作用与定义的详细说明" aria-label="Permalink to &quot;构造方法（Constructor）是 Java 中的一种特殊方法，用于初始化对象的状态。当创建对象时，构造方法会被自动调用，以确保对象的属性得到适当的设置。以下是构造方法的作用与定义的详细说明：&quot;">​</a></h3><h3 id="_3-1-构造方法的作用" tabindex="-1">3.1 构造方法的作用 <a class="header-anchor" href="#_3-1-构造方法的作用" aria-label="Permalink to &quot;3.1 构造方法的作用&quot;">​</a></h3><ul><li><strong>初始化对象</strong>：构造方法的主要作用是初始化新创建的对象，设置其属性的初始值。</li><li><strong>分配资源</strong>：构造方法可以用于分配对象所需的资源，例如打开文件、建立数据库连接等。</li><li><strong>保证一致性</strong>：通过构造方法，可以确保在对象创建时，属性值符合业务逻辑或约束条件。</li></ul><h3 id="_3-2-构造方法的定义" tabindex="-1">3.2 构造方法的定义 <a class="header-anchor" href="#_3-2-构造方法的定义" aria-label="Permalink to &quot;3.2 构造方法的定义&quot;">​</a></h3><p>构造方法的定义遵循以下规则：</p><ul><li><strong>名称</strong>：构造方法的名称必须与类名相同。</li><li><strong>没有返回类型</strong>：构造方法没有返回类型（也不使用 <code>void</code>）。</li><li><strong>可以重载</strong>：可以定义多个构造方法，允许不同的参数列表，实现构造方法的重载。</li></ul><h3 id="_3-3-构造方法的示例" tabindex="-1">3.3 构造方法的示例 <a class="header-anchor" href="#_3-3-构造方法的示例" aria-label="Permalink to &quot;3.3 构造方法的示例&quot;">​</a></h3><p>以下是一个简单的构造方法示例：</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki solarized-dark vp-code" tabindex="0"><code><span class="line"><span>public class Dog {</span></span>
<span class="line"><span>    private String name;</span></span>
<span class="line"><span>    private int age;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 构造方法</span></span>
<span class="line"><span>    public Dog(String name, int age) {</span></span>
<span class="line"><span>        this.name = name; // 使用参数初始化属性</span></span>
<span class="line"><span>        this.age = age;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public void bark() {</span></span>
<span class="line"><span>        System.out.println(name + &quot; says: Woof!&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="_3-4-使用构造方法创建对象" tabindex="-1">3.4 使用构造方法创建对象 <a class="header-anchor" href="#_3-4-使用构造方法创建对象" aria-label="Permalink to &quot;3.4 使用构造方法创建对象&quot;">​</a></h3><p>在使用构造方法创建对象时，Java 会自动调用构造方法：</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki solarized-dark vp-code" tabindex="0"><code><span class="line"><span>public class Main {</span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        // 创建对象时调用构造方法</span></span>
<span class="line"><span>        Dog myDog = new Dog(&quot;Buddy&quot;, 3);</span></span>
<span class="line"><span>        myDog.bark(); // 输出: Buddy says: Woof!</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="_3-5-默认构造方法" tabindex="-1">3.5 默认构造方法 <a class="header-anchor" href="#_3-5-默认构造方法" aria-label="Permalink to &quot;3.5 默认构造方法&quot;">​</a></h3><p>如果没有定义任何构造方法，Java 会自动提供一个默认构造方法，该方法没有参数，且不执行任何操作。默认构造方法允许创建对象而不初始化属性。例如：</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki solarized-dark vp-code" tabindex="0"><code><span class="line"><span>public class Cat {</span></span>
<span class="line"><span>    // 没有定义构造方法，Java 提供默认构造方法</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="_3-6-构造方法重载" tabindex="-1">3.6 构造方法重载 <a class="header-anchor" href="#_3-6-构造方法重载" aria-label="Permalink to &quot;3.6 构造方法重载&quot;">​</a></h3><p>可以根据需要定义多个构造方法。例如：</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki solarized-dark vp-code" tabindex="0"><code><span class="line"><span>public class Dog {</span></span>
<span class="line"><span>    private String name;</span></span>
<span class="line"><span>    private int age;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 默认构造方法</span></span>
<span class="line"><span>    public Dog() {</span></span>
<span class="line"><span>        this.name = &quot;Unknown&quot;;</span></span>
<span class="line"><span>        this.age = 0;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 带参数的构造方法</span></span>
<span class="line"><span>    public Dog(String name, int age) {</span></span>
<span class="line"><span>        this.name = name;</span></span>
<span class="line"><span>        this.age = age;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h3 id="_3-7-从一个构造方法调用另一个构造方法" tabindex="-1">3.7 从一个构造方法调用另一个构造方法 <a class="header-anchor" href="#_3-7-从一个构造方法调用另一个构造方法" aria-label="Permalink to &quot;3.7 从一个构造方法调用另一个构造方法&quot;">​</a></h3><p>在 Java 中，可以通过使用 <code>this</code> 关键字从一个构造方法调用另一个构造方法。这种做法称为构造方法的重载，允许你在一个构造方法中复用另一个构造方法的逻辑，避免代码重复。调用另一个构造方法必须是构造方法的第一条语句。</p><h4 id="_3-7-1-使用-this-关键字" tabindex="-1">3.7.1 使用 <code>this</code> 关键字 <a class="header-anchor" href="#_3-7-1-使用-this-关键字" aria-label="Permalink to &quot;3.7.1 使用 \`this\` 关键字&quot;">​</a></h4><p>当在一个构造方法中调用另一个构造方法时，使用 <code>this</code> 关键字来引用当前对象的另一个构造方法。调用格式如下：</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki solarized-dark vp-code" tabindex="0"><code><span class="line"><span>this(参数列表);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="_3-7-2-示例代码" tabindex="-1">3.7.2 示例代码 <a class="header-anchor" href="#_3-7-2-示例代码" aria-label="Permalink to &quot;3.7.2 示例代码&quot;">​</a></h3><p>以下是一个示例，展示如何从一个构造方法调用另一个构造方法：</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki solarized-dark vp-code" tabindex="0"><code><span class="line"><span>public class Dog {</span></span>
<span class="line"><span>    private String name;</span></span>
<span class="line"><span>    private int age;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 带参数的构造方法</span></span>
<span class="line"><span>    public Dog(String name, int age) {</span></span>
<span class="line"><span>        this.name = name;</span></span>
<span class="line"><span>        this.age = age;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 默认构造方法，调用带参数的构造方法</span></span>
<span class="line"><span>    public Dog() {</span></span>
<span class="line"><span>        this(&quot;Unknown&quot;, 0); // 调用带参数的构造方法</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public void bark() {</span></span>
<span class="line"><span>        System.out.println(name + &quot; says: Woof!&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class Main {</span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        Dog dog1 = new Dog(&quot;Buddy&quot;, 3); // 调用带参数的构造方法</span></span>
<span class="line"><span>        dog1.bark(); // 输出: Buddy says: Woof!</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        Dog dog2 = new Dog(); // 调用默认构造方法</span></span>
<span class="line"><span>        dog2.bark(); // 输出: Unknown says: Woof!</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><h3 id="_3-7-3-解释" tabindex="-1">3.7.3 解释 <a class="header-anchor" href="#_3-7-3-解释" aria-label="Permalink to &quot;3.7.3 解释&quot;">​</a></h3><ul><li><strong>带参数的构造方法</strong>：<code>Dog(String name, int age)</code> 初始化 <code>name</code> 和 <code>age</code> 属性。</li><li><strong>默认构造方法</strong>：<code>Dog()</code> 通过 <code>this(&quot;Unknown&quot;, 0);</code> 调用带参数的构造方法，为 <code>name</code> 和 <code>age</code> 赋予默认值。</li><li>在 <code>Main</code> 类中，通过不同的构造方法创建对象，展示了如何通过构造方法的重载来实现灵活的对象初始化。</li></ul><h3 id="_3-8-公共构造方法与私有构造方法" tabindex="-1">3.8 公共构造方法与私有构造方法 <a class="header-anchor" href="#_3-8-公共构造方法与私有构造方法" aria-label="Permalink to &quot;3.8 公共构造方法与私有构造方法&quot;">​</a></h3><h4 id="_3-8-1-公共构造方法-public-constructor" tabindex="-1">3.8.1 公共构造方法（Public Constructor） <a class="header-anchor" href="#_3-8-1-公共构造方法-public-constructor" aria-label="Permalink to &quot;3.8.1 公共构造方法（Public Constructor）&quot;">​</a></h4><h5 id="定义" tabindex="-1">定义 <a class="header-anchor" href="#定义" aria-label="Permalink to &quot;定义&quot;">​</a></h5><p>公共构造方法是使用 <code>public</code> 修饰符定义的构造方法，允许其他类创建该类的对象。</p><h5 id="特点" tabindex="-1">特点 <a class="header-anchor" href="#特点" aria-label="Permalink to &quot;特点&quot;">​</a></h5><ul><li><strong>可访问性</strong>：可以在任何地方调用，允许其他类通过 <code>new</code> 关键字创建对象。</li><li><strong>用途</strong>：通常用于需要实例化类的场景。</li></ul><h5 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h5><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki solarized-dark vp-code" tabindex="0"><code><span class="line"><span>public class Dog {</span></span>
<span class="line"><span>    private String name;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 公共构造方法</span></span>
<span class="line"><span>    public Dog(String name) {</span></span>
<span class="line"><span>        this.name = name;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public void bark() {</span></span>
<span class="line"><span>        System.out.println(name + &quot; says: Woof!&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class Main {</span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        // 使用公共构造方法创建对象</span></span>
<span class="line"><span>        Dog myDog = new Dog(&quot;Buddy&quot;);</span></span>
<span class="line"><span>        myDog.bark(); // 输出: Buddy says: Woof!</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h4 id="_3-8-2-私有构造方法-private-constructor" tabindex="-1">3.8.2 私有构造方法（Private Constructor） <a class="header-anchor" href="#_3-8-2-私有构造方法-private-constructor" aria-label="Permalink to &quot;3.8.2 私有构造方法（Private Constructor）&quot;">​</a></h4><h4 id="定义-1" tabindex="-1">定义 <a class="header-anchor" href="#定义-1" aria-label="Permalink to &quot;定义&quot;">​</a></h4><p>私有构造方法是使用 <code>private</code> 修饰符定义的构造方法，限制了外部类对该构造方法的访问。</p><h4 id="特点-1" tabindex="-1">特点 <a class="header-anchor" href="#特点-1" aria-label="Permalink to &quot;特点&quot;">​</a></h4><ul><li><strong>可访问性</strong>：只能在该类的内部访问，外部类和子类无法直接创建该类的对象。</li><li><strong>用途</strong>： <ul><li><strong>单例模式</strong>：用于确保类只有一个实例，通常与静态方法结合使用。</li><li><strong>静态方法</strong>：用于只提供静态方法的工具类，防止实例化。</li></ul></li></ul><h4 id="示例-1" tabindex="-1">示例 <a class="header-anchor" href="#示例-1" aria-label="Permalink to &quot;示例&quot;">​</a></h4><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki solarized-dark vp-code" tabindex="0"><code><span class="line"><span>public class Singleton {</span></span>
<span class="line"><span>    // 静态变量保存唯一实例</span></span>
<span class="line"><span>    private static Singleton instance;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 私有构造方法</span></span>
<span class="line"><span>    private Singleton() {</span></span>
<span class="line"><span>        // 防止外部实例化</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 静态方法获取唯一实例</span></span>
<span class="line"><span>    public static Singleton getInstance() {</span></span>
<span class="line"><span>        if (instance == null) {</span></span>
<span class="line"><span>            instance = new Singleton();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        return instance;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class Main {</span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        // 通过静态方法获取唯一实例</span></span>
<span class="line"><span>        Singleton singleton = Singleton.getInstance();</span></span>
<span class="line"><span>        System.out.println(singleton);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h1 id="_4-静态成员" tabindex="-1"><u style="text-decoration:underline;text-decoration-color:deepskyblue;">4.静态成员 </u> <a class="header-anchor" href="#_4-静态成员" aria-label="Permalink to &quot;&lt;u style=&quot;text-decoration: underline; text-decoration-color: deepskyblue;&quot;&gt;4.静态成员 &lt;/u&gt;&quot;">​</a></h1><p>在 Java 中，静态成员（Static Members）是指与类本身相关联的成员，而不是与类的实例（对象）相关联。静态成员包括静态变量和静态方法。以下是对静态成员的详细讲解。</p><h3 id="_4-1-静态变量-static-variables" tabindex="-1">4.1 静态变量（Static Variables） <a class="header-anchor" href="#_4-1-静态变量-static-variables" aria-label="Permalink to &quot;4.1 静态变量（Static Variables）&quot;">​</a></h3><h4 id="定义-2" tabindex="-1">定义 <a class="header-anchor" href="#定义-2" aria-label="Permalink to &quot;定义&quot;">​</a></h4><p>静态变量是使用 <code>static</code> 修饰符定义的变量。它们属于类而不是实例，所有对象共享同一个静态变量。</p><h4 id="特点-2" tabindex="-1">特点 <a class="header-anchor" href="#特点-2" aria-label="Permalink to &quot;特点&quot;">​</a></h4><ul><li><strong>共享性</strong>：所有实例共享同一个静态变量的值。</li><li><strong>内存分配</strong>：静态变量在类加载时分配内存，而不是在实例化对象时分配。</li><li><strong>访问方式</strong>：可以通过类名直接访问，也可以通过实例访问，但推荐使用类名。</li></ul><h4 id="示例-2" tabindex="-1">示例 <a class="header-anchor" href="#示例-2" aria-label="Permalink to &quot;示例&quot;">​</a></h4><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki solarized-dark vp-code" tabindex="0"><code><span class="line"><span>public class Dog {</span></span>
<span class="line"><span>    // 静态变量</span></span>
<span class="line"><span>    private static int count = 0;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 构造方法</span></span>
<span class="line"><span>    public Dog() {</span></span>
<span class="line"><span>        count++; // 每次创建对象时增加计数</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 静态方法获取计数</span></span>
<span class="line"><span>    public static int getCount() {</span></span>
<span class="line"><span>        return count;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class Main {</span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        new Dog();</span></span>
<span class="line"><span>        new Dog();</span></span>
<span class="line"><span>        System.out.println(&quot;Number of dogs: &quot; + Dog.getCount()); // 输出: Number of dogs: 2</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h4 id="_4-2-静态方法-static-methods" tabindex="-1">4.2 静态方法（Static Methods） <a class="header-anchor" href="#_4-2-静态方法-static-methods" aria-label="Permalink to &quot;4.2 静态方法（Static Methods）&quot;">​</a></h4><h4 id="定义-3" tabindex="-1">定义 <a class="header-anchor" href="#定义-3" aria-label="Permalink to &quot;定义&quot;">​</a></h4><p>静态方法是使用 <code>static</code> 修饰符定义的方法。它们与类本身相关联，可以在没有创建类实例的情况下调用。</p><h4 id="特点-3" tabindex="-1">特点 <a class="header-anchor" href="#特点-3" aria-label="Permalink to &quot;特点&quot;">​</a></h4><ul><li><strong>无须对象</strong>：静态方法可以在不创建对象的情况下调用。</li><li><strong>只能访问静态成员</strong>：静态方法只能直接访问类中的静态变量和静态方法，不能直接访问实例变量和实例方法。</li><li><strong>通过类名调用</strong>：推荐通过类名来调用静态方法。</li></ul><h4 id="示例-3" tabindex="-1">示例 <a class="header-anchor" href="#示例-3" aria-label="Permalink to &quot;示例&quot;">​</a></h4><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki solarized-dark vp-code" tabindex="0"><code><span class="line"><span>public class MathUtils {</span></span>
<span class="line"><span>    // 静态方法：计算平方</span></span>
<span class="line"><span>    public static int square(int number) {</span></span>
<span class="line"><span>        return number * number;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class Main {</span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        int result = MathUtils.square(5);</span></span>
<span class="line"><span>        System.out.println(&quot;Square of 5: &quot; + result); // 输出: Square of 5: 25</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h4 id="_4-3-静态初始化器" tabindex="-1">4.3 静态初始化器 <a class="header-anchor" href="#_4-3-静态初始化器" aria-label="Permalink to &quot;4.3 静态初始化器&quot;">​</a></h4><p>静态初始化器是用 <code>static</code> 关键字定义的代码块，用于初始化静态变量。它在类加载时执行，仅执行一次。</p><h4 id="示例-4" tabindex="-1">示例 <a class="header-anchor" href="#示例-4" aria-label="Permalink to &quot;示例&quot;">​</a></h4><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki solarized-dark vp-code" tabindex="0"><code><span class="line"><span>public class Example {</span></span>
<span class="line"><span>    static int value;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 静态块</span></span>
<span class="line"><span>    static {</span></span>
<span class="line"><span>        value = 10; // 初始化静态变量</span></span>
<span class="line"><span>        System.out.println(&quot;Static block executed.&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        System.out.println(&quot;Value: &quot; + value); // 输出: Value: 10</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="_4-4-实例成员" tabindex="-1">4.4 实例成员 <a class="header-anchor" href="#_4-4-实例成员" aria-label="Permalink to &quot;4.4 实例成员&quot;">​</a></h3><blockquote><p>在类定义中如果成员变量或成员方法没有用static来修饰，则该成员就是实例成员。</p></blockquote><blockquote><p>实例成员为个别对象所有，彼此之间不能共享。</p></blockquote><h1 id="_5-对象的应用" tabindex="-1"><u style="text-decoration:underline;text-decoration-color:deepskyblue;">5.对象的应用 </u> <a class="header-anchor" href="#_5-对象的应用" aria-label="Permalink to &quot;&lt;u style=&quot;text-decoration: underline; text-decoration-color: deepskyblue;&quot;&gt;5.对象的应用 &lt;/u&gt;&quot;">​</a></h1><p>在 Java 中，对象的应用非常广泛，包括对对象的赋值与比较、使用引用变量作为方法的返回值、类类型的数组，以及将数组作为参数进行方法调用。以下是这些概念的详细讲解。</p><h3 id="_5-1-对象的赋值与比较" tabindex="-1">5.1 对象的赋值与比较 <a class="header-anchor" href="#_5-1-对象的赋值与比较" aria-label="Permalink to &quot;5.1 对象的赋值与比较&quot;">​</a></h3><h4 id="对象的赋值" tabindex="-1">对象的赋值 <a class="header-anchor" href="#对象的赋值" aria-label="Permalink to &quot;对象的赋值&quot;">​</a></h4><p>在 Java 中，可以将一个对象的引用赋值给另一个引用变量。这样，两个引用变量将指向同一个对象。</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki solarized-dark vp-code" tabindex="0"><code><span class="line"><span>public class Dog {</span></span>
<span class="line"><span>    private String name;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public Dog(String name) {</span></span>
<span class="line"><span>        this.name = name;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public String getName() {</span></span>
<span class="line"><span>        return name;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class Main {</span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        Dog dog1 = new Dog(&quot;Buddy&quot;);</span></span>
<span class="line"><span>        Dog dog2 = dog1; // dog2 指向与 dog1 相同的对象</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        System.out.println(dog2.getName()); // 输出: Buddy</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h4 id="对象的比较" tabindex="-1">对象的比较 <a class="header-anchor" href="#对象的比较" aria-label="Permalink to &quot;对象的比较&quot;">​</a></h4><p>使用 <code>==</code> 运算符比较两个对象时，实际上比较的是它们的引用是否相同。如果需要比较对象内容，应该重写 <code>equals()</code> 方法。</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki solarized-dark vp-code" tabindex="0"><code><span class="line"><span>public class Dog {</span></span>
<span class="line"><span>    private String name;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public Dog(String name) {</span></span>
<span class="line"><span>        this.name = name;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public boolean equals(Object obj) {</span></span>
<span class="line"><span>        if (this == obj) return true; // 引用相同</span></span>
<span class="line"><span>        if (obj == null || getClass() != obj.getClass()) return false;</span></span>
<span class="line"><span>        Dog dog = (Dog) obj;</span></span>
<span class="line"><span>        return name.equals(dog.name); // 比较对象内容</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class Main {</span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        Dog dog1 = new Dog(&quot;Buddy&quot;);</span></span>
<span class="line"><span>        Dog dog2 = new Dog(&quot;Buddy&quot;);</span></span>
<span class="line"><span>        Dog dog3 = dog1;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        System.out.println(dog1 == dog2); // 输出: false</span></span>
<span class="line"><span>        System.out.println(dog1.equals(dog2)); // 输出: true</span></span>
<span class="line"><span>        System.out.println(dog1 == dog3); // 输出: true</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><h3 id="_5-2-引用变量作为方法的返回值" tabindex="-1">5.2 引用变量作为方法的返回值 <a class="header-anchor" href="#_5-2-引用变量作为方法的返回值" aria-label="Permalink to &quot;5.2 引用变量作为方法的返回值&quot;">​</a></h3><p>在 Java 中，可以使用对象的引用作为方法的返回值。这种方式允许方法返回一个对象的引用，从而可以在调用处直接使用该对象。</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki solarized-dark vp-code" tabindex="0"><code><span class="line"><span>public class Dog {</span></span>
<span class="line"><span>    private String name;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public Dog(String name) {</span></span>
<span class="line"><span>        this.name = name;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public String getName() {</span></span>
<span class="line"><span>        return name;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class Main {</span></span>
<span class="line"><span>    public static Dog createDog(String name) {</span></span>
<span class="line"><span>        return new Dog(name); // 返回 Dog 对象的引用</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        Dog myDog = createDog(&quot;Buddy&quot;);</span></span>
<span class="line"><span>        System.out.println(myDog.getName()); // 输出: Buddy</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h3 id="_5-3-类类型的数组" tabindex="-1">5.3 类类型的数组 <a class="header-anchor" href="#_5-3-类类型的数组" aria-label="Permalink to &quot;5.3 类类型的数组&quot;">​</a></h3><p>Java 支持使用类类型创建数组。数组中的每个元素都是该类的对象引用。</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki solarized-dark vp-code" tabindex="0"><code><span class="line"><span>public class Dog {</span></span>
<span class="line"><span>    private String name;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public Dog(String name) {</span></span>
<span class="line"><span>        this.name = name;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public String getName() {</span></span>
<span class="line"><span>        return name;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class Main {</span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        Dog[] dogs = new Dog[2]; // 创建 Dog 类型的数组</span></span>
<span class="line"><span>        dogs[0] = new Dog(&quot;Buddy&quot;);</span></span>
<span class="line"><span>        dogs[1] = new Dog(&quot;Max&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        for (Dog dog : dogs) {</span></span>
<span class="line"><span>            System.out.println(dog.getName()); // 输出: Buddy, Max</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h3 id="_5-4-将数组作为参数进行方法调用" tabindex="-1">5.4 将数组作为参数进行方法调用 <a class="header-anchor" href="#_5-4-将数组作为参数进行方法调用" aria-label="Permalink to &quot;5.4 将数组作为参数进行方法调用&quot;">​</a></h3><p>可以将数组作为参数传递给方法，从而在方法中访问和修改数组的内容。</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki solarized-dark vp-code" tabindex="0"><code><span class="line"><span>public class Main {</span></span>
<span class="line"><span>    public static void printDogNames(Dog[] dogs) {</span></span>
<span class="line"><span>        for (Dog dog : dogs) {</span></span>
<span class="line"><span>            System.out.println(dog.getName());</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        Dog[] dogs = new Dog[2];</span></span>
<span class="line"><span>        dogs[0] = new Dog(&quot;Buddy&quot;);</span></span>
<span class="line"><span>        dogs[1] = new Dog(&quot;Max&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        printDogNames(dogs); // 输出: Buddy, Max</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h1 id="_6-基本类型和包类型之间的自动转换" tabindex="-1"><u style="text-decoration:underline;text-decoration-color:deepskyblue;">6.基本类型和包类型之间的自动转换 </u> <a class="header-anchor" href="#_6-基本类型和包类型之间的自动转换" aria-label="Permalink to &quot;&lt;u style=&quot;text-decoration: underline; text-decoration-color: deepskyblue;&quot;&gt;6.基本类型和包类型之间的自动转换 &lt;/u&gt;&quot;">​</a></h1><p>在 Java 中，基本类型和包装类型之间可以进行自动转换，这种转换称为 <strong>自动装箱</strong>（autoboxing）和 <strong>自动拆箱</strong>（unboxing）。以下是对这两种转换的详细讲解。</p><h3 id="_6-1-基本类型与包装类型" tabindex="-1">6.1 基本类型与包装类型 <a class="header-anchor" href="#_6-1-基本类型与包装类型" aria-label="Permalink to &quot;6.1 基本类型与包装类型&quot;">​</a></h3><ul><li><p><strong>基本类型</strong>：Java 提供了八种基本数据类型，包括：</p><ul><li><code>int</code>（整数）</li><li><code>char</code>（字符）</li><li><code>boolean</code>（布尔）</li><li><code>byte</code>（字节）</li><li><code>short</code>（短整型）</li><li><code>long</code>（长整型）</li><li><code>float</code>（单精度浮点型）</li><li><code>double</code>（双精度浮点型）</li></ul></li><li><p><strong>包装类型</strong>：每种基本类型都有一个对应的包装类型（对象类型），用于将基本类型包装成对象：</p><ul><li><code>Integer</code>（包装 <code>int</code>）</li><li><code>Character</code>（包装 <code>char</code>）</li><li><code>Boolean</code>（包装 <code>boolean</code>）</li><li><code>Byte</code>（包装 <code>byte</code>）</li><li><code>Short</code>（包装 <code>short</code>）</li><li><code>Long</code>（包装 <code>long</code>）</li><li><code>Float</code>（包装 <code>float</code>）</li><li><code>Double</code>（包装 <code>double</code>）</li></ul></li></ul><h3 id="_6-2-自动装箱" tabindex="-1">6.2 自动装箱 <a class="header-anchor" href="#_6-2-自动装箱" aria-label="Permalink to &quot;6.2 自动装箱&quot;">​</a></h3><p>自动装箱是将基本类型自动转换为其对应的包装类型的过程。这通常发生在需要对象的上下文中，例如将基本类型添加到集合中。</p><h4 id="示例-5" tabindex="-1">示例 <a class="header-anchor" href="#示例-5" aria-label="Permalink to &quot;示例&quot;">​</a></h4><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki solarized-dark vp-code" tabindex="0"><code><span class="line"><span>import java.util.ArrayList;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class Main {</span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        ArrayList&lt;Integer&gt; list = new ArrayList&lt;&gt;();</span></span>
<span class="line"><span>        int number = 5;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 自动装箱：将基本类型 int 转换为 Integer</span></span>
<span class="line"><span>        list.add(number); // 隐式地将 number 装箱为 Integer</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        System.out.println(&quot;List: &quot; + list); // 输出: List: [5]</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="_6-3-自动拆箱" tabindex="-1">6.3 自动拆箱 <a class="header-anchor" href="#_6-3-自动拆箱" aria-label="Permalink to &quot;6.3 自动拆箱&quot;">​</a></h3><p>自动拆箱是将包装类型自动转换为其对应的基本类型的过程。这通常发生在需要基本类型的上下文中，例如从集合中获取值。</p><h4 id="示例-6" tabindex="-1">示例 <a class="header-anchor" href="#示例-6" aria-label="Permalink to &quot;示例&quot;">​</a></h4><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki solarized-dark vp-code" tabindex="0"><code><span class="line"><span>import java.util.ArrayList;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class Main {</span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        ArrayList&lt;Integer&gt; list = new ArrayList&lt;&gt;();</span></span>
<span class="line"><span>        list.add(10); // 自动装箱</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 自动拆箱：将 Integer 转换为 int</span></span>
<span class="line"><span>        int number = list.get(0); // 隐式地将 list.get(0) 拆箱为 int</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        System.out.println(&quot;Number: &quot; + number); // 输出: Number: 10</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="_6-4-注意事项" tabindex="-1">6.4 注意事项 <a class="header-anchor" href="#_6-4-注意事项" aria-label="Permalink to &quot;6.4 注意事项&quot;">​</a></h3><ul><li><strong>性能</strong>：装箱和拆箱会涉及对象的创建和垃圾回收，因此在性能敏感的情况下，频繁的装箱和拆箱可能会影响性能。</li><li><strong>空值处理</strong>：包装类型可以为 <code>null</code>，而基本类型不能。因此，在拆箱时，如果包装类型为 <code>null</code>，会抛出 <code>NullPointerException</code>。</li></ul><h1 id="_7-java语言的垃圾回收机制" tabindex="-1"><u style="text-decoration:underline;text-decoration-color:deepskyblue;">7.Java语言的垃圾回收机制 </u> <a class="header-anchor" href="#_7-java语言的垃圾回收机制" aria-label="Permalink to &quot;&lt;u style=&quot;text-decoration: underline; text-decoration-color: deepskyblue;&quot;&gt;7.Java语言的垃圾回收机制 &lt;/u&gt;&quot;">​</a></h1><p>Java 的垃圾回收机制是一种自动内存管理技术，通过标记、清除和压缩等步骤自动释放不再使用的对象所占用的内存，减少了内存泄漏和管理错误的风险。它采用多种算法，如标记-清除、复制和分代回收，根据对象的生命周期进行优化。程序员可以通过选择合适的垃圾回收器和调优 JVM 参数来提升性能，从而简化内存管理并提高程序的稳定性。</p><blockquote><p>详细请见书本P136</p></blockquote><hr>`,118)]))}const m=s(l,[["render",i]]);export{d as __pageData,m as default};
