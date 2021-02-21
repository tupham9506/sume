@extends('layouts.home')
@section('content')
    {!! ssr('vue-ssr-server-bundle.json')->disabled(false)->render() !!}
@endsection
