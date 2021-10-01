
###
 # @Author: your name
 # @Date: 2021-10-01 06:24:36
 # @LastEditTime: 2021-10-01 07:14:14
 # @LastEditors: your name
 # @Description: In User Settings Edit
 # @FilePath: \nextmusic\scripts\gc.sh
### 
# (see more)[https://github.com/element-plus/element-plus/blob/dev/scripts/gc.sh] 
NAME=$1

FILE_PATH=$(cd "$(dirname "${BASH_SOURCE[0]}")/../src/components/" && pwd)

re="[[:space:]]+"

if [ "$#" -ne 1 ] || [[ $NAME =~ $re ]] || [ "$NAME" == "" ]; then
  echo "Usage: yarn gen \${name} with no space"
  exit 1
fi

DIRNAME="$FILE_PATH/$NAME"
INPUT_NAME=$NAME

if [ -d "$DIRNAME" ]; then
  echo "$NAME component already exists, please change it"
  exit 1
fi
NORMALIZED_NAME=""
for i in $(echo $NAME | sed 's/[_|-]\([a-z]\)/\ \1/;s/^\([a-z]\)/\ \1/'); do
  C=$(echo "${i:0:1}" | tr "[:lower:]" "[:upper:]")
  NORMALIZED_NAME="$NORMALIZED_NAME${C}${i:1}"
done
NAME=$NORMALIZED_NAME

mkdir "$DIRNAME"

cat > $DIRNAME/$NAME.vue <<EOF
<script  lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({
  name: '${NAME}',
  props: { },
  setup(props) {
    // init here
  },
})
</script>
<template>
  <div>
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>

</style>
EOF