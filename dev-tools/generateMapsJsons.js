#!/usr/bin/node
const fs = require("fs");

const DIRECTORY_PATH = "src/assets/maps/maps_svg";

const VIEWBOX_MATCHER = /viewBox="([\d.]*) ([\d.]*) ([\d.]*) ([\d.]*)"/gm;

const ID_MATCHER = /id="([\w -]*)"/gm;
const CLASS_MATCHER = /class="([\w -]*)"/gm;
const D_MATCHER = / d="([\w ,.-]*)"/gm;

const PATH_MATCHER = /^.*<path.*(\/path> || \/>).*$/gm;
const GROUP_MATCHER = /<g.*class.*>\s\n(.*path.*\s\n)*.*\/g>/gm

fs.readdir(DIRECTORY_PATH + "/raws", (err, files) => {
    // Go through found files
    files.forEach(fileName => {
        // Create empty json object to fill
        let result = {
            "xmlns": "http://wwww3org/2000/svg",
            "viewBox": {
                "x": 0,
                "y": 0,
                "width": 0,
                "height": 0
            },
            "contentPath": [],
            "contentGroup": []
        };
        try {
            // reads the current found file
            let data = fs.readFileSync(DIRECTORY_PATH + "/raws/" + fileName, 'utf8')
            // Get viewbox values
            let viewBoxValues = [...data.matchAll(VIEWBOX_MATCHER)][0].slice(1,5);
            // Assigns viewbox values
            [result.viewBox.x, result.viewBox.y,result.viewBox.width, result.viewBox.height] = viewBoxValues;
            // gets the groups
            groupValues = [...data.matchAll(GROUP_MATCHER)]
            // removes the groups to avoid disturbances
            data = data.replace(GROUP_MATCHER, '');
            // for each group
            groupValues.forEach(e=>{
                // get the group full path
                let rawGroup = e[0];
                // Create empty json object to fill
                let groupObject = {
                    id:"",
                    class:"",
                    contentPath:[]
                }
                // Get the assign values
                let groupId = [...e[0].matchAll(ID_MATCHER)];
                groupObject.id = groupId[0]?groupId[0][1]:"";
                let groupClass = [...e[0].matchAll(CLASS_MATCHER)];
                groupObject.class = groupClass[0]?groupClass[0][1]:"";
                // gets the paths inside group
                let groupPaths = [...rawGroup.matchAll(PATH_MATCHER)];
                // removes the paths from the group to avoid disturbances
                rawGroup.replace(PATH_MATCHER, '')
                // for each path in the group
                groupPaths.forEach(groupPath=>{
                    // Create empty json object to fill
                    let groupPathObject = {id:"", class:"", d:"" }
                    groupPath = groupPath[0];
                    // Get the assign values
                    let idMatches = [...groupPath.matchAll(ID_MATCHER)];
                    groupPathObject.id = idMatches[0]?idMatches[0][1]:"";
                    let classMatches = [...groupPath.matchAll(CLASS_MATCHER)]
                    groupPathObject.class = classMatches[0]?classMatches[0][1]:"";
                    let dMatches = [...groupPath.matchAll(D_MATCHER)]
                    groupPathObject.d = dMatches[0]?dMatches[0][1]:"";
                    // Push the created path to group
                    groupObject.contentPath.push(groupPathObject);
                })
                // Push the created group to group list
                result.contentGroup.push(groupObject);
            });
            
            pathValues = [...data.matchAll(PATH_MATCHER)]
            pathValues.forEach(path=>{
                // Create empty json object to fill
                let pathObject = { id:"", class:"", d:"" }
                path = path[0];
                // Get the assign values
                let idMatches = [...path.matchAll(ID_MATCHER)];
                pathObject.id = idMatches[0]?idMatches[0][1]:"";
                let classMatches = [...path.matchAll(CLASS_MATCHER)]
                pathObject.class = classMatches[0]?classMatches[0][1]:"";
                let dMatches = [...path.matchAll(D_MATCHER)]
                pathObject.d = dMatches[0]?dMatches[0][1]:"";
                // Push the created path to path list
                result.contentPath.push(pathObject);
            });
            // Writes the new file from generated json structure and given path
            fs.writeFileSync(DIRECTORY_PATH + "/svg/" +fileName+".json", JSON.stringify(result))

        } catch (err) {
            console.error(err)
        }
    })

})