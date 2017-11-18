@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">Dashboard</div>

                    <div class="panel-body">

                        <table style="width:100%">
                            <tr>
                                <th>Urgency</th>
                                <th>Type</th>
                                <th>Reference_id</th>
                            </tr>
                            @foreach($archives as $archive)
                                <tr>
                                    <td>{{ urldecode($archive->urgency) }}</td>
                                    <td>{{ urldecode($archive->type) }}</td>
                                    <td>{{ urldecode($archive->referee_id) }}</td>
                                </tr>
                            @endforeach

                        </table>

                    </div>
                </div>
            </div>
        </div>
@endsection
