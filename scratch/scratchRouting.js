/* Copyright 2018 Streampunk Media Ltd.

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/

const g = require('../index.js');

;(async () => {
    const f = await g.find({})
    const sources = f.sources()
    console.log(sources[0])

    const r = await g.routing({ name: "ROUTER-1" })
    console.log(r.connections())
    console.log(r.sourcename())
    console.log(r.change(sources[0]))
    setInterval(() => {
        console.log(r.connections())
    }, 1000)
    // r.destroy()
})()

