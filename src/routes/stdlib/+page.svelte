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

