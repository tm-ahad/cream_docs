<script lang="ts">
    import { stringify } from "postcss";
import Navbar from "../navbar.svelte";
    const CONST = 'const'
</script>
<Navbar/>
<div class="section">
    <h1>Getting started</h1>
    <p>
        Firstly, You have to install cream on your computer
        You could do so by running this command
    </p>
    <pre class="mt-[1.7%]"><code class="lang-shell code">$ curl https://<span class="hljs-regexp"></span>raw.githubusercontent.com<span class="hljs-regexp">/tm-ahad/</span>cream-installation<span class="hljs-regexp">/master/i</span>nstall.bash | bash </code></pre>
    <p class="mt-opsp"><strong>Note</strong>: You&#39;ll have to run the command on a <a href="https://www.msys2.org/">msys</a> shell on windows to install cream.</p>
</div>

<div class="section">
    <h1>Updating cream</h1>
    <p>
        You could update cream by running this command
    </p>
    <pre class="mt-[1.7%]"><code class="lang-shell code">$ curl https://<span class="hljs-regexp"></span>raw.githubusercontent.com<span class="hljs-regexp">/tm-ahad/</span>cream-installation<span class="hljs-regexp">/master/u</span>pdate.bash | bash </code></pre>
    <p class="mt-opsp"><strong>Note</strong>: You&#39;ll have to run the command on a <a href="https://www.msys2.org/">msys</a> shell on windows to install cream.</p>
</div>

<div class="section">
    <h1>Creating Project</h1>
    <p>
        To create a cream project. run this command and answer the questions asked by cream cli
    </p>
    <pre class="mt-[1.7%]"><code class="lang-shell code">$ cream new &lt;project_name&gt; </code></pre>
</div>

<div class="section">
    <h1>Building</h1>
    <p>
        After building the compiled html will be saved into /build/index.html (default)
        To build a cream project you can run:
    </p>
    <pre class="mt-[1.7%]"><code class="lang-shell code">$ cream build </code></pre>
</div>

<div class="section">
    <h1>Serving</h1>
    <p>

        To serve a cream project (You have yo build it first) on localhost you can run: 
    </p>
    <pre class="mt-[1.7%]"><code class="lang-shell code">$ cream serve </code></pre>
</div>

<div class="section">
    <h1>Hello world</h1>
    <p>
        Example of 'Hello World!' in cream: 
    </p>
    <div>
        <pre class="code mt-2 mb-3"><code>src/app.js
----------
app &#123;
    &lt;temp&gt;
        &lt;h1&gt;Hello, World!&lt;/h1&gt;
    &lt;/temp&gt;
&#125;</code></pre>
    </div>
</div>

<div class="section">
    <h1>Dynamic Rendering</h1>
    <p>
        Example of rendering element dynamically in cream: 
    </p>
    <div>
        <pre class="code mt-2 mb-3"><code>src/app.js
----------
<code class="text-gray-500">/*It is depended if your project is in js import 'make_string' or if it's ts import 'make_string_ts'
Same for every lib*/</code>

import lib:map_concat.js

app &#123;

    let fruits = &#123
        'apple': '2.00',
        'orange': '1.00',
        'banana': '1.50'
    &#125

    &lt;temp&gt;
        <code class="text-gray-500">//Rendering elements of 'fruits'</code>
        @temp $mapConcat(Object.entries($todos), item => &#123;
            {CONST} [fruit, price] = item

            return `<p>Price of a $&#123;fruit&#125; is $&#123;price&#125;</p>`
        &#125;)
    &lt;/temp&gt;
&#125;</code></pre>
    </div>
</div>

<div class="section">
    <h1>Templates</h1>
    <p>
        Example of 'Hello World!' in cream: 
    </p>
    <div>
        <pre class="code mt-2 mb-3"><code>src/app.js
----------

app &#123;
    const content = 'Lorem ipsum'
    const clickHandler = () => console.log("Button clicked")

    &lt;temp&gt;
        <code class="text-gray-500">//Rendering elements of 'fruits'</code>
        &lt;p id="pid"&gt;&lt;/p&gt;
        $dyn:"pid" innerText=$content;

        &lt;button id="bid"&gt;Click Me!&lt;/button&gt;
        $dyn:"bid" onclick=$clickHandler;
    &lt;/temp&gt;
&#125;</code></pre>
    </div>
</div>

<div class="section">
    <h1>States</h1>
    <p>
        Example of state managment in cream: 
    </p>
    <div>
        <pre class="code mt-2 mb-3"><code>src/app.js
----------
    
app &#123;
    let a = 2;

    <code class="text-gray-500">//:= is the state operator</code>
    b := $a * 2;
    a = 3;

    let clickHandler = () => &#123;
        a := $a + 1
    &#125;
    
    &lt;temp&gt;
        &lt;p id="pid"&gt;&lt;/p&gt;
        $dyn:"pid" innerText=$b;

        &lt;button id="bid"&gt;Click me!&lt;/button&gt;
        $dyn:"bid" onclick=$clickHandler;
    &lt;/temp&gt;
&#125;</code></pre>
        </div>
</div>

<div class="section">
    <h1>Components</h1>
    <p>
        Example of component in cream: 
    </p>
    <div>
        <pre class="code mt-2 mb-3"><code>src/app.js
----------
import MyComponent from src/myComponent.js
    
app &#123;
    &lt;temp&gt;
        &lt;MyComponent /&gt;
    &lt;/temp&gt;
&#125;</code></pre>
        </div>
</div>

<div class="section">
        <pre class="code mt-2 mb-3"><code>src/myComponent.js
------------------

myComponent &#123;
    &lt;temp&gt;
        &lt;h1&gt;Lorem ipsum&lt;/h1&gt;
    &lt;/temp&gt;
&#125;</code></pre>
</div>

<div class="section">
    <h1>Passing data through component</h1>
    <p>
        Example of component in cream: 
    </p>
    <div>
        <pre class="code mt-2 mb-3"><code>src/app.js
----------

import Item from src/item.js
import mod:src/store
    
app &#123;
    {CONST} fruits = ['orange', 'banana', 'mango', 'apple']

    &lt;temp&gt;
        &lt;div id="id1"&gt;&lt;/div&gt;

        <code class="text-gray-500">//using $fruits to handle state if fruits is updated id1 element will also be updated</code>
        @temp:"id1" $mapConcat($fruits, item => &#123
            <code class="text-gray-500">//setting data</code>
            store.set("fruit", item)

            <code class="text-gray-500">//rendering item</code>
            <code class="text-gray-500">//Make sure using template literals when dynamically rendering component</code>
            return `&lt;Item/&gt;`
        &#125)
        &lt;Item /&gt;
    &lt;/temp&gt;
&#125;</code></pre>
    </div>
</div>

<div class="section">
        <pre class="code mt-2 mb-3"><code>src/item.js
-----------
    
Item &#123;
    <code class="text-gray-500">//getting data</code>
    {CONST} fruit = store.get("fruit")

    &lt;temp&gt;
        &lt;p&gt;$fruit&lt;/p&gt;
    &lt;/temp&gt;
&#125;</code></pre>
</div>

<div class="section">
    <pre class="code mt-2 mb-3"><code>src/store.mod.cts
-----------------

//Initializing store
var store = new Map()
</code></pre>
</div>

<div class="section">
    <h1>Router</h1>
    <p>Example of router in cream:</p>
    <pre class="code mt-2 mb-3"><code>src/app.js
----------

app &#123;
    &lt;temp&gt;
        &lt;p&gt;Index page&lt;/p&gt;
    &lt;/temp&gt;
&#125;</code></pre>
</div>

<div class="section">
    <p>Route 1</p>
    <pre class="code mt-2 mb-3"><code>src/route1.js
-------------

Page &#123;
    &lt;temp&gt;
        &lt;p&gt;Route 1&lt;/p&gt;
    &lt;/temp&gt;
&#125;</code></pre>
</div>

<div class="section">
    <p>Route 2</p>
    <pre class="code mt-2 mb-3"><code>src/route2.js
-------------

Page &#123;
    &lt;temp&gt;
        &lt;p&gt;Route 2&lt;/p&gt;
    &lt;/temp&gt;
&#125;</code></pre>
</div>

<div class="section">
    <p>Error page</p>
    <pre class="code mt-2 mb-3"><code>src/error.js
------------

Page &#123;
    &lt;temp&gt;
        &lt;p&gt;404 page not found&lt;/p&gt;
    &lt;/temp&gt;
&#125;</code></pre>
</div>

<div class="section">
    <p>Setting the routes:</p>
    <pre class="code mt-2 mb-3"><code>src/routes.json
---------------
&#123
    "/route1": "src/route1.js",
    "/route2": "src/route2.js",

    <code class="text-gray-500">//cream server will redirect to '/error' if page not found</code>
    "/error": "src/error.js"
&#125</code></pre>
</div>

<div class="section">
    <h1>Static file serving</h1>
    <p>
        To serve static files, You have to set 'static_dir' to the path of static folder on the config file.
        Static files will be rendered on 'static_dir_render'
        Example of serving static files in cream:
    </p>
    <pre class="code mt-2 mb-3"><code>src/config.dsp
-----------
routes$routes.json
<code class="text-gray-500">//Static dir '/static'</code>
static_dir$/static
<code class="text-gray-500">//Dir '/static' will be rendered on '/static_files'</code>
static_dir_render$/static_files
</code></pre>
</div>

<div class="section">
    <h1>Generating id</h1>
    <p>Example of generating id in cream:</p>
    <pre class="code mt-2 mb-3"><code>src/app.js
---------
        
app &#123;
    {CONST} handleClick = () => console.log("Lorem ipsum")


    &lt;temp&gt;
        <code class="text-gray-500">//generating id and saving it to variable name</code>
        &lt;div id=@gen:name;&gt;Lorem ipsum&lt;div&gt;
        <code class="text-gray-500">//Template</code>
        $dyn:name onclick=$handleClick
    &lt;/temp&gt;
&#125;</code></pre>
</div>

<div class="section">
    <h1>Form handling</h1>
    <p>Example of form handling in cream (ts):</p>
    <pre class="code mt-2 mb-3"><code>src/app.js
----------
import lib:get_by_name.ts
import mod:src/api_client
        
app &#123;
    {CONST} handleClick = () => console.log("Lorem ipsum")

    <code class="text-gray-500">//selecting elements</code>
    const name_tag = GetByName&lt;HTMLInputElement&gt;("name_tag")
    const age_tag = GetByName&lt;HTMLInputElement&gt;("age")
    const email_tag = GetByName&lt;HTMLInputElement&gt;("email")

    <code class="text-gray-500">//Submit function</code>
    const submit = () => &#123;
        {CONST} name = name_tag.value;
        {CONST} age = age_tag.value;
        {CONST} email = email_tag.value;

        {CONST} obj = &#123
            name,
            age,
            email
        &#125

        console.table(obj);
        <code class="text-gray-500">//Posting data to api</code>
        ApiClient.post("/createUser", JSON.stringify(obj))
    &#125

    &lt;temp&gt;
        &lt;p&gt;Name&lt;/p&gt;
        &lt;input type="text" id=@gen:name_tag;/&gt;
        &lt;p&gt;Age&lt;/p&gt;
        &lt;input type="number" id=@gen:age;/&gt;
        &lt;p&gt;Email&lt;/p&gt;
        &lt;input type="email" id=@gen:email;/&gt;

        &lt;button id="submit"&gt;Submit&lt;/button&gt;
        $dyn:"submit" onclick=$submit;
    &lt;/temp&gt;
&#125;</code></pre>
</div>

<div class="section">
    <pre class="code mt-2 mb-3"><code>src/api_client.mod.cts
----------------------
import lib:http_client.ts
const ApiClient = new HttpClient("api-link")</code></pre>
</div>

<div class="section">
    <h1>Intregating tailwindcss</h1>
    <h1 class="mt-2">Step 1 (Installation): </h1>
    <p>To install tailwindcss you first have to install css. If your project is a node project</p>
    <p>You could install tailwindcss by this command</p>
    <pre class="code mt-2 mb-3"><code>npm install -D tailwindcss
npx tailwindcss init </code></pre>

    <h1>Step 2 (Configuration):</h1>
    <p>You have to add this config to your config.dsp file</p>
    <h2 class="font-semibold text-lg">Don't change or remove other config</h2>
    <pre class="code mt-2 mb-3"><code>config.dsp
----------
pre_make$npx tailwindcss -i ./src/styles/style.css -o ./static/dist.css
static_dir$/static
static_dir_render$/static
    </code></pre>
    <p>After configuring config.dsp add this code to head_prefix.html</p>
    <pre class="code mt-2 mb-3"><code>head_prefix.html
----------------
&ltlink href="/static/dist.css" rel="stylesheet"/&gt</code></pre>

    <h2 class="text-lg font-semibold">
        Build your project then serve it & Voila tailwindcss intregated with cream
    </h2>
</div>

<div class="section">
    <h1>Npm packages</h1>
    <p>Example of importing npm package in cream:</p>
    <pre class="code mt-2 mb-3"><code>src/app.js
---------
import npm:&lt;package_name&gt;
        
app &#123;
    &lt;temp&gt;
    &lt;/temp&gt;
&#125;</code></pre>
</div>