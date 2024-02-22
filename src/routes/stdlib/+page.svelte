<script>
    import Navbar from "../components/navbar.svelte"
</script>
<Navbar/>
<div class="section">
    <h1>Cream standatd library</h1>
</div>
<div class="section">
    <h2 class="h2">UUID</h2>
    <p>cream UUID generator is a built-in function to generate unique id's</p>
    <p>Example:</p>
    <pre class="code mt-2 mb-3"><code>src/app.js
----------
<code class="text-gray-500">/*It is depended if your project is in js import 'UUID.js' or if it's ts import 'UUID.ts'
    Same for every lib*/</code>
import lib:UUID.js
        
app &#123;
<code class="text-gray-500">/*Generating UUID*/</code>
    let id = utilUUID()
    console.log(id)

    &lt;temp&gt;
    &lt;/temp&gt;
&#125;</code></pre>
</div>

<div class="section">
    <h2 class="h2">Query params</h2>
    <p>cream have a std lib to get query params</p>
    <p>Example:</p>
    <pre class="code mt-2 mb-3"><code>src/app.js
----------
<code class="text-gray-500">/*It is depended if your project is in js import 'params.js' or if it's ts import 'params.ts'
    Same for every lib*/</code>
import lib:params.js
        
app &#123;
<code class="text-gray-500">/*Accessing query params.*/</code>
    /*
    * @type &#123;URLSearchParams&#125;
    */
    let params = utilQueryParams()
    let a = params.get("a");
    console.log(a)

    &lt;temp&gt;
    &lt;/temp&gt;
&#125;</code></pre>
</div>

<div class="section">
    <h2 class="h2">Http client</h2>
    <p>cream have a std lib to make http request synchronously</p>
    <p>Example:</p>
    <pre class="code mt-2 mb-3"><code>src/app.js
----------
<code class="text-gray-500">/*It is depended if your project is in js import 'params.js' or if it's ts import 'params.ts'
    Same for every lib*/</code>
import lib:http_client.ts
        
app &#123;
<code class="text-gray-500">/*Accessing query params.*/</code>
    let client = new HttpClient("https://jsonplaceholder.typicode.com/")
    let json = client.get("/todos/1")

    console.log(json)

    &lt;temp&gt;
    &lt;/temp&gt;
&#125;</code></pre>
</div>

<div class="section">
    <h2 class="h2">Camel</h2>
    <p>cream have a data format like json named 'camel'. Here is it</p>
    <p>Example:</p>
    <pre class="code mt-2 mb-3"><code>src/app.js
----------
<code class="text-gray-500">/*It is depended if your project is in js import 'params.js' or if it's ts import 'params.ts'
    Same for every lib*/</code>
import lib:client.ts
        
app &#123;
<code class="text-gray-500">/*Accessing query params.*/</code>
    let data = &#123 "name": "tm", "email": "tm.ahad.07@gmail.com" &#125
    let rawCamel = Camel.toString(data)

    console.log(rawCamel)
    console.log(Camel.parse(rawCamel))

    &lt;temp&gt;
    &lt;/temp&gt;
&#125;</code></pre>
</div>

