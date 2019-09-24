<template>
    <div>
        <h3>
            Shop
        </h3>

        <router-link :to="{name: 'article', params: {id: 6}}">Article 6</router-link>
        <router-link :to="{name: 'article', params: {id: 12}}">Article 12</router-link>

        <h3>Sub view</h3>
        <transition name="bounce" mode="out-in">
            <router-view></router-view>
        </transition>

        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor hic illo impedit nemo quae repudiandae tempore vitae! Doloribus et numquam quis. Accusantium, ad adipisci aperiam, commodi dolorem doloremque et exercitationem expedita impedit iste, laudantium maxime minus nemo nulla odio officia pariatur perferendis praesentium quibusdam rerum sed similique sit sunt tenetur ullam vero voluptate? Adipisci atque autem blanditiis consequuntur cum cupiditate delectus doloribus eius expedita illo in, ipsam minima nemo nulla obcaecati optio, perferendis placeat quae quisquam quos repudiandae sapiente ut voluptate! Aliquam aperiam autem ducimus ea eius enim excepturi illo, in laboriosam neque nihil omnis, optio praesentium quibusdam quisquam ratione sapiente suscipit temporibus ut velit! At corporis, cumque debitis delectus dolor dolores dolorum eaque earum ex explicabo fugit id in, incidunt magnam molestiae nam neque nesciunt nostrum officiis optio placeat possimus quibusdam quo rem repellendus sequi sit vitae. Ad blanditiis eius eos, eum facilis illo inventore ipsa, iste perspiciatis, quaerat quisquam totam. Blanditiis consectetur cupiditate, ea eius eos expedita fuga, illum impedit libero magni minus neque odit quisquam? Alias aperiam, architecto asperiores aut autem beatae consectetur consequuntur cum cumque dolorem doloremque dolores ea error eveniet fugiat minus placeat quam quasi qui quidem quisquam quos ratione rem repellendus saepe sed sequi suscipit vel voluptatem voluptatibus. A adipisci animi aperiam aspernatur aut cum dicta dignissimos distinctio dolorem dolorum eius esse et, eum explicabo fugiat impedit inventore iste itaque magnam magni minima mollitia nesciunt nihil nobis nostrum numquam omnis optio perspiciatis quam reprehenderit rerum, tempora tempore tenetur ullam veniam voluptate voluptatibus. Aliquid commodi, corporis dolor ea eaque eius error excepturi facilis, hic illo in maiores minus natus, necessitatibus nemo neque omnis quas quidem quis saepe voluptate voluptatem voluptates voluptatibus? A aperiam atque cum debitis dolor, esse est excepturi facere fuga harum hic iste laborum, magni minima minus modi, nobis omnis perferendis porro praesentium provident quae ratione repudiandae sapiente sed similique sint tenetur? Cum impedit non soluta sunt unde. Ab alias aperiam aspernatur, consequatur excepturi exercitationem fugit incidunt iste, natus odio, odit quisquam similique sit vero voluptatum? Accusamus, adipisci animi at autem corporis dolores earum enim in ipsa, iste minima nam nisi non odit quod quos sequi similique tempore tenetur unde velit veniam veritatis vero voluptas voluptates. At consequatur magnam saepe sequi! Beatae minus necessitatibus voluptatem voluptatum! A aspernatur at atque aut debitis, dolorum impedit itaque magni maiores minus nihil numquam, officiis quae quaerat quibusdam, sit soluta tenetur ullam veniam voluptate. Inventore itaque, similique!
        </p>
    </div>
</template>


<script>
    export default {
    }
</script>
