<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <title>Home</title>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
    @yield('content')

    <script src="{{ asset('app.js') }}"></script>
</body>
</html>
