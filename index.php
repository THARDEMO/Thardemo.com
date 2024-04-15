<?php
    $ignore_files = [".DS_Store", ".", "..", "cManager.js"];
    $path = "./components";

    function importStyles( $path ) 
    {
        global $ignore_files;

        $files = array_diff( scandir( "$path"), $ignore_files);
        foreach( $files as $potential_style) 
        {
            if( is_dir("$path/$potential_style")) importStyles( "$path/$potential_style");

            if( !checkExtention('css', "$path/$potential_style")) continue;
            echo "<link rel='stylesheet' href='$path/$potential_style'>";
        }


    }

    function checkExtention( $type, $path) 
    {
        $ext = pathinfo("$path", PATHINFO_EXTENSION);
        if( $ext != $type) return false;
        return true;
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>THardemo.com</title>
    <link rel="shortcut icon" href="./media/images/favicon.jpg" type="image/x-icon">
    <link rel="stylesheet" href="./index.css">
    <?php echo importStyles( $path ) ?>
</head>
<body id="body">

    <main id="wrapper"></main>
    <footer><p style="color: rgba(255, 255, 255, 0.5); text-align: center;">| thardemo.com | <?php echo date("Y") ?> |</p></footer>

    <script type="module">

            let COMPONENTS = [];
            <?php 
                    
                $URL = $_SERVER['REQUEST_URI'];
                $view = ltrim(parse_url($URL, PHP_URL_PATH), '/');  
            
                if( $view === 'project') 
                {
                    addComponents( "./components", "project");
                }
                else {
                    $ignore_files[] = 'project';
                    addComponents( ".", "components");
                }


                function addComponents( $path, $current_dir)
                {
                    global $ignore_files;

                    $components = array_diff( scandir( "$path/$current_dir"), $ignore_files);

                    foreach( $components as $component) 
                    {    
                        $comp_path = "$path/$current_dir";
                        
                        if( is_dir("$comp_path/$component")) addComponents( $comp_path, $component);
                        
                        if( !checkExtention( 'js', "$comp_path/$component")) continue;

                        echo "COMPONENTS.push('$comp_path/$component'); \n";
                    }
                }
            ?>

            Promise.all( COMPONENTS.map( component => import( component )))
            .then( components => components.forEach( module => {

                    if( !module.component) return

                    module.component.preRender();
            }));



    </script>

</body>
</html>
